import { gotCars, gotWinners } from '../../interface';
import { CAR_MANUFACTURERS, CAR_MODELS } from '../../manufacturers';
import Winners from '../winners/winners';
import CarItem from './car';

export default class Garage {
    app: Element | null;
    menu: Element | null;
    garageUi: Element | null;
    currentPage: number;
    totalItems: number;
    carsIds: Array<number>;
    carsOnPage: Array<CarItem>;
    totalCars: Array<CarItem>;
    winners: Winners;
    constructor() {
        this.app = document.querySelector('.app');
        this.menu = document.querySelector('.menu');
        this.garageUi = document.createElement('div');
        this.carsIds = [];
        this.currentPage = 1;
        this.totalItems = 1;
        this.carsOnPage = [];
        this.totalCars = [];
        this.winners = new Winners();
    }

    setUp() {
        const garage = document.createElement('button');
        garage.className = 'btn_garage btn';
        garage.innerHTML = 'Garage';
        this.menu?.appendChild(garage);

        this.winners.setUp(this.totalCars);

        this.garageView();

        garage.addEventListener('click', this.garageSelect);
    }

    garageView() {
        if (this.garageUi) {
            this.garageUi.className = 'garage-wrapper';
            this.app?.appendChild(this.garageUi as Element);

            const createWrapper = document.createElement('form');
            const updateWrapper = document.createElement('form');
            const subMenuWrapper = document.createElement('form');
            createWrapper.className = 'create-wrapper';
            updateWrapper.className = 'update-wrapper input_inactive';
            subMenuWrapper.className = 'submenu-wrapper';
            this.garageUi.appendChild(createWrapper);
            this.garageUi.appendChild(updateWrapper);
            this.garageUi.appendChild(subMenuWrapper);

            const garageInput = document.createElement('input');
            garageInput.className = 'garage__input';

            const garageColor = document.createElement('input');
            garageColor.className = 'garage__color';
            garageColor.setAttribute('type', 'color');

            const garageButton = document.createElement('button');
            garageButton.className = 'btn_reset btn_garage-menu';
            garageButton.className = 'btn_garage-menu';
            garageButton.setAttribute('type', 'button');

            createWrapper.appendChild(garageInput.cloneNode());
            createWrapper.appendChild(garageColor.cloneNode());
            const create = garageButton.cloneNode() as HTMLElement;
            create.innerHTML = 'Create';
            createWrapper.appendChild(create);
            create.addEventListener('click', () => {
                this.createCar();
            });

            updateWrapper.appendChild(garageInput.cloneNode());
            updateWrapper.appendChild(garageColor.cloneNode());
            const update = garageButton.cloneNode() as HTMLElement;
            update.innerHTML = 'Update';
            update.addEventListener('click', () => {
                this.updateCar();
            });
            updateWrapper.appendChild(update);

            garageButton.className = 'btn_garage-menu';
            const race = garageButton.cloneNode() as HTMLElement;
            race.addEventListener('click', () => {
                this.race();
            });
            const reset = garageButton.cloneNode() as HTMLElement;
            const generate = garageButton.cloneNode() as HTMLElement;
            race.innerHTML = 'Race';
            reset.innerHTML = 'Reset';
            reset.addEventListener('click', () => {
                this.reset();
            });
            generate.innerHTML = 'Generate Cars';
            generate.addEventListener('click', () => {
                this.generateCars();
            });
            subMenuWrapper.appendChild(race);
            subMenuWrapper.appendChild(reset);
            subMenuWrapper.appendChild(generate);

            const title = document.createElement('h2');
            title.className = 'garage__title';
            title.innerHTML = 'Garage (checking...)';
            this.garageUi.appendChild(title);

            const carItems = document.createElement('div');
            carItems.className = 'car__items';
            this.garageUi?.appendChild(carItems);

            this.getCars();
        }
    }

    garageSelect() {
        const getGarage = document.querySelector('.garage-wrapper');
        const getWinners = document.querySelector('.winners-wrapper');
        getGarage?.classList.remove('inactive');
        getWinners?.classList.add('inactive');
    }

    async getCars() {
        this.carsOnPage = [];
        const carsPerPage = 7;
        const response = await fetch(`http://127.0.0.1:3000/garage?_page=${this.currentPage}&_limit=${carsPerPage}`, {
            method: 'GET',
        });
        // const everyCar = await fetch(`http://127.0.0.1:3000/garage`, {
        //     method: 'GET',
        // });
        // const allCars = await everyCar.json();
        const responseIds = await fetch(`http://127.0.0.1:3000/garage`, {
            method: 'GET',
        });
        const page = document.createElement('h3');
        const cars = await response.json();
        const carsIds = await responseIds.json();
        carsIds.forEach((e: gotCars) => {
            try {
                this.carsIds.push(e.id);
            } catch (err) {
                console.log('Cant get more ids at this page.. i guess');
            }
        });
        const totalCount = response.headers.get('X-Total-Count') as string;
        this.totalItems = +totalCount;
        const carItems = document.querySelector('.car__items') as Element;
        carItems.innerHTML = '';
        carItems.appendChild(page);
        page.innerHTML = `Page: ${this.currentPage}`;
        const title = document.querySelector('.garage__title') as Element;
        title.innerHTML = `Garage (${this.totalItems})`;

        const prev = document.createElement('button');
        prev.className = 'btn btn_prev';
        prev.innerHTML = '←';
        prev.addEventListener('click', () => {
            const minPages = 1;
            if (this.currentPage > minPages) {
                this.currentPage--;
            }
            this.getCars();
        });
        carItems.appendChild(prev);

        const next = document.createElement('button');
        next.className = 'btn btn_next';
        next.innerHTML = '→';
        next.addEventListener('click', () => {
            const maxPages = Math.ceil(this.totalItems / carsPerPage);
            if (this.currentPage < maxPages) {
                this.currentPage++;
            }
            this.getCars();
        });
        carItems.appendChild(next);

        cars.forEach((e: gotCars) => {
            const car = new CarItem(e, this.getCars, this.currentPage);
            this.totalCars.push(car);
            this.carsOnPage.push(car);
            car.initCar(carItems);
        });
    }

    generateCarId() {
        let i = 1;
        while (this.carsIds.includes(i)) {
            i++;
        }
        this.carsIds.push(i);
        return i;
    }

    async createCar() {
        const carName = document.querySelector('.create-wrapper .garage__input') as HTMLInputElement;
        const carColor = document.querySelector('.create-wrapper .garage__color') as HTMLInputElement;
        await fetch('http://127.0.0.1:3000/garage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: carName.value,
                color: carColor.value,
                id: this.generateCarId(),
            }),
        });
        this.getCars();
    }

    async generateCars() {
        function getRandomColor() {
            const letters = '0123456789ABCDEF'.split('');
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.round(Math.random() * 15)];
            }
            return color;
        }

        for (let i = 1; i <= 100; i++) {
            const carPrefix = CAR_MANUFACTURERS[Math.floor(Math.random() * CAR_MANUFACTURERS.length)];
            const carPostfix = CAR_MODELS[Math.floor(Math.random() * CAR_MODELS.length)];
            const carColor = getRandomColor();
            const carId = this.generateCarId();

            await fetch('http://127.0.0.1:3000/garage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: `${carPrefix} ${carPostfix}`,
                    color: carColor,
                    id: carId,
                }),
            });
            this.carsIds.push(carId);
        }
        this.getCars();
    }

    async updateCar() {
        const carName = document.querySelector('.update-wrapper .garage__input') as HTMLInputElement;
        const carColor = document.querySelector('.update-wrapper .garage__color') as HTMLInputElement;
        const carId = sessionStorage.getItem('selectedCarId');
        await fetch(`http://127.0.0.1:3000/garage/${carId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: carName.value,
                color: carColor.value,
            }),
        });
        this.getCars();
        document.querySelector('.update-wrapper')?.classList.add('input_inactive');
    }

    async race() {
        const isRace = true;
        const referenceButtons = document.querySelectorAll('.btn-car_start');
        const cars = this.carsOnPage;
        const promises = [];
        for (let i = 0; i < this.carsOnPage.length; i++) {
            const promise = new Promise((resolve, reject) => {
                const id = cars[i].carData.id;
                const finish = cars[i].startEngine(id, referenceButtons[i] as HTMLElement, isRace);
                if (finish) {
                    resolve(finish);
                }
                reject('broken');
            });
            promises.push(promise);
        }
        const winnerData = await Promise.any(promises).then((value) => {
            const dataArray = value as Array<object | string>;
            const message = dataArray[1] as string;
            const winnerData = dataArray[0] as gotWinners;
            const winnerModal = document.createElement('div');
            winnerModal.className = 'winner-modal';
            winnerModal.innerHTML = message;
            this.app?.appendChild(winnerModal);
            setTimeout(() => {
                winnerModal.remove();
            }, 5000);

            return winnerData;
        });

        await fetch(`http://127.0.0.1:3000/winners`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(winnerData),
        });

        await this.winners.getWinners(this.totalCars);
    }

    async reset() {
        const cars = document.querySelectorAll('.car') as NodeListOf<HTMLElement>;
        cars.forEach((e: HTMLElement) => {
            e.style.marginLeft = '0';
        });
        document.querySelectorAll('.btn-car_start').forEach((e) => {
            e.classList.remove('input_inactive');
        });
    }
}
