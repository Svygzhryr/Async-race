import { gotCars } from '../../interface';
import image from '../../../assets/car_icon.svg';

export default class CarItem {
    carData: gotCars;
    constructor(carData: gotCars) {
        this.carData = carData;
    }

    initCar(garageUi: Element) {
        const carImg = document.createElement('img');
        carImg.setAttribute('src', image);
        carImg.className = 'car';
        console.log(this.carData.color);
        carImg.style.fill = this.carData.color;
        garageUi.appendChild(carImg);

        // const winnersItem = document.createElement('div');
        // winnersItem.className = 'winners__item';
        // this.garageUi?.appendChild(winnersItem);
        // winnersItem.innerHTML = `${e.name}`;
    }
}
