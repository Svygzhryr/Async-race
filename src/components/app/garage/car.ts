import { gotCars } from '../../interface';
import image from '../../../assets/car_icon.svg';

export default class CarItem {
    carData: gotCars;
    getCars: () => Promise<void>;
    currentPage: number;
    constructor(carData: gotCars, getCars: () => Promise<void>, currentPage: number) {
        this.carData = carData;
        this.getCars = getCars;
        this.currentPage = currentPage;
    }

    initCar(carItems: Element) {
        const carItem = document.createElement('div');
        carItem.className = 'garage__item';
        carItem.innerHTML = this.carData.name;
        carItem.style.color = this.carData.color;
        carItems.appendChild(carItem);

        carItem.appendChild(document.createElement('br'));

        const carSelect = document.createElement('button');
        carSelect.className = 'btn-car btn-car_select';
        carSelect.innerHTML = 'Select';
        carSelect.addEventListener('click', () => {
            this.selectCar(this.carData.id);
        });
        carItem.appendChild(carSelect);

        const carRemove = document.createElement('button');
        carRemove.className = 'btn-car btn-car_remove';
        carRemove.innerHTML = 'Remove';
        carRemove.addEventListener('click', () => {
            this.removeCar(this.carData.id);
        });
        carItem.appendChild(carRemove);

        carItem.appendChild(document.createElement('br'));

        const carStart = document.createElement('button');
        carStart.className = 'btn-car btn-car_start';
        carStart.innerHTML = 'A';
        carStart.addEventListener('click', (e: Event) => {
            this.startEngine(this.carData.id, e);
        });
        carItem.appendChild(carStart);

        const carStop = document.createElement('button');
        carStop.className = 'btn-car btn-car_stop';
        carStop.innerHTML = 'B';
        carStop.addEventListener('click', () => {
            this.stopEngine(this.carData.id);
        });
        carItem.appendChild(carStop);

        const carImg = document.createElement('div');
        carImg.innerHTML = image;
        carImg.className = 'car';
        carImg.style.fill = this.carData.color;
        carItem.appendChild(carImg);
    }

    async removeCar(id: number) {
        await fetch(`http://127.0.0.1:3000/garage/${id}`, {
            method: 'DELETE',
        });
        this.getCars();
    }

    async selectCar(id: number) {
        sessionStorage.setItem('selectedCarId', id.toString());
        document.querySelector('.update-wrapper')?.classList.remove('input_inactive');
    }

    async startEngine(id: number, e: Event) {
        const element = e.target as HTMLElement;
        const carElement = element.nextSibling?.nextSibling as HTMLElement;
        const response = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=started`, {
            method: 'PATCH',
        });
        // if (response.ok) {
        const carSpecs = await response.json();
        // } else {
        //     console.log('Cant get specified car');
        // }
        let calculateWidth = 0;
        try {
            const road = document.querySelector('.garage__item') as HTMLElement;
            const roadWidth = +getComputedStyle(road).width.slice(0, -2) as number;
            calculateWidth = roadWidth - 100;
        } catch {
            null;
        }
        console.log(carSpecs.velocity);
        const driving = [{ marginLeft: '0px' }, { marginLeft: `${calculateWidth}px` }];
        console.log(carSpecs);

        carElement.animate(driving, { duration: carSpecs.distance / carSpecs.velocity, endDelay: 3000 });
    }

    async stopEngine(id: number) {
        const response = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=stopped`, {
            method: 'PATCH',
        });
        const started = await response.json();
        console.log(started);
    }
}
