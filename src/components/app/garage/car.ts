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
        carItem.appendChild(carStart);

        const carStop = document.createElement('button');
        carStop.className = 'btn-car btn-car_stop';
        carStop.innerHTML = 'B';
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
}
