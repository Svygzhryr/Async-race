import { gotCars } from '../../interface';
import CarItem from './car';

export default class Garage {
    app: Element | null;
    menu: Element | null;
    garageUi: Element | null;
    currentPage: number;
    totalItems: number;
    constructor() {
        this.app = document.querySelector('.app');
        this.menu = document.querySelector('.menu');
        this.garageUi = document.createElement('div');
        this.currentPage = 1;
        this.totalItems = 1;
    }

    setUp() {
        const garage = document.createElement('button');
        garage.className = 'btn_garage btn';
        garage.innerHTML = 'Garage';
        this.menu?.appendChild(garage);

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
            updateWrapper.className = 'update-wrapper';
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
            create.addEventListener('click', this.createCar);

            updateWrapper.appendChild(garageInput.cloneNode());
            updateWrapper.appendChild(garageColor.cloneNode());
            const update = garageButton.cloneNode() as HTMLElement;
            update.innerHTML = 'Update';
            updateWrapper.appendChild(update);

            garageButton.className = 'btn_garage-menu';
            const race = garageButton.cloneNode() as HTMLElement;
            const reset = garageButton.cloneNode() as HTMLElement;
            const generate = garageButton.cloneNode() as HTMLElement;
            race.innerHTML = 'Race';
            reset.innerHTML = 'Reset';
            generate.innerHTML = 'Generate Cars';
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
        const carsPerPage = 7;
        const response = await fetch(`http://127.0.0.1:3000/garage?_page=${this.currentPage}&_limit=${carsPerPage}`, {
            method: 'GET',
        });
        console.log(this.currentPage);
        const page = document.createElement('h3');
        const cars = await response.json();
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
            const car = new CarItem(e);
            car.initCar(carItems);
        });
    }

    async createCar() {
        const carName = document.querySelector('.create-wrapper .garage__input') as HTMLInputElement;
        const carColor = document.querySelector('.create-wrapper .garage__color') as HTMLInputElement;
        console.log(carName.value, carColor.value);
        await fetch('http://127.0.0.1:3000/garage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: carName.value,
                color: carColor.value,
                id: this.totalItems,
            }),
        });
    }
}
