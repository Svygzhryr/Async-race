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
        garageUi.appendChild(carItem);
        const carImg = document.createElement('div');
        carImg.innerHTML = image;
        carImg.className = 'car';
        console.log(carImg.querySelector('svg'));
        carImg.style.fill = this.carData.color;
        carItem.appendChild(carImg);

        // const winnersItem = document.createElement('div');
        // winnersItem.className = 'winners__item';
        // this.garageUi?.appendChild(winnersItem);
        // winnersItem.innerHTML = `${e.name}`;
    }
}
