import { gotCars } from '../../interface';
import image from '../../../assets/car_icon.svg';

export default class CarItem {
    carData: gotCars;
    constructor(carData: gotCars) {
        this.carData = carData;
    }

    initCar(garageUi: Element) {
        const carItem = document.createElement('div');
        carItem.className = 'garage__item';
        carItem.innerHTML = this.carData.name;
        carItem.style.color = this.carData.color;
        garageUi.appendChild(carItem);

        const carSelect = document.createElement('button');
        carSelect.className = 'btn-car btn-car_select';
        carSelect.innerHTML = 'Select';
        carItem.appendChild(carSelect);

        const carRemove = document.createElement('button');
        carRemove.className = 'btn-car btn-car_remove';
        carRemove.innerHTML = 'Remove';
        carItem.appendChild(carRemove);

        const carImg = document.createElement('div');
        carImg.innerHTML = image;
        carImg.className = 'car';
        carImg.style.fill = this.carData.color;
        carItem.appendChild(carImg);
    }
}
