import { gotCars } from '../../interface';
import CarItem from './car';

export default class Garage {
    app: Element | null;
    menu: Element | null;
    garageUi: Element | null;
    constructor() {
        this.app = document.querySelector('.app');
        this.menu = document.querySelector('.menu');
        this.garageUi = document.createElement('div');
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

            const resetWrapper = document.createElement('form');
            const createWrapper = document.createElement('form');
            const subMenuWrapper = document.createElement('form');
            resetWrapper.className = 'reset-wrapper';
            createWrapper.className = 'create-wrapper';
            subMenuWrapper.className = 'submenu-wrapper';
            this.garageUi.appendChild(resetWrapper);
            this.garageUi.appendChild(createWrapper);
            this.garageUi.appendChild(subMenuWrapper);

            const garageInput = document.createElement('input');
            const garageColor = document.createElement('input');
            const garageButton = document.createElement('button');
            garageInput.className = 'garage__input';
            garageColor.className = 'garage__color';
            garageButton.className = 'btn_reset btn_garage-menu';
            garageColor.setAttribute('type', 'color');
            resetWrapper.appendChild(garageInput.cloneNode());
            resetWrapper.appendChild(garageColor.cloneNode());
            garageButton.className = 'btn_garage-menu';
            const create = garageButton.cloneNode() as HTMLElement;
            create.innerHTML = 'Create';
            resetWrapper.appendChild(create);

            createWrapper.appendChild(garageInput.cloneNode());
            createWrapper.appendChild(garageColor.cloneNode());
            const update = garageButton.cloneNode() as HTMLElement;
            update.innerHTML = 'Update';
            createWrapper.appendChild(update);

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

            this.getCars();

            const prev = document.createElement('button');
            prev.className = 'btn btn_prev';
            prev.innerHTML = '←';
            prev.addEventListener('click', this.handlePrevPage);
            this.garageUi?.appendChild(prev);

            const next = document.createElement('button');
            next.className = 'btn btn_next';
            next.innerHTML = '→';
            next.addEventListener('click', this.handleNextPage);
            this.garageUi?.appendChild(next);
        }
    }

    garageSelect() {
        const getGarage = document.querySelector('.garage-wrapper');
        const getWinners = document.querySelector('.winners-wrapper');
        getGarage?.classList.remove('inactive');
        getWinners?.classList.add('inactive');
    }

    handlePrevPage() {
        this.getCars(1);
    }

    handleNextPage() {
        console.log('next');
    }

    async getCars(garagePage?: number) {
        const response = await fetch(`http://127.0.0.1:3000/garage?_page=${garagePage ?? 1}&_limit=7`, {
            method: 'GET',
        });
        const page = document.createElement('h3');
        const cars = await response.json();
        const items = await response.headers.get('X-Total-Count');
        this.garageUi?.appendChild(page);
        page.innerHTML = `Page: 1`;
        const title = document.querySelector('.garage__title') as Element;
        title.innerHTML = `Garage (${items})`;

        cars.forEach((e: gotCars) => {
            const car = new CarItem(e);
            if (this.garageUi) {
                car.initCar(this.garageUi);
            }
        });
    }
}
