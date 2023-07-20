import { gotCars } from '../../interface';
import image from '../../../assets/car_icon.svg';

export default class CarItem {
    carData: gotCars;
    constructor(carData: gotCars) {
        this.carData = carData;
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
        carItem.appendChild(carSelect);

        const carRemove = document.createElement('button');
        carRemove.className = 'btn-car btn-car_remove';
        carRemove.innerHTML = 'Remove';
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
}
