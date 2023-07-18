import { gotCars } from '../../interface';
import svg = require('../../../assets/car_icon.svg');

export default class CarItem {
    carData: gotCars;
    constructor(carData: gotCars) {
        this.carData = carData;
    }

    initCar() {
        const carImg = document.createElement('img');
        carImg.setAttribute('src', svg);
        console.log(this.carData);
        // const winnersItem = document.createElement('div');
        // winnersItem.className = 'winners__item';
        // this.garageUi?.appendChild(winnersItem);
        // winnersItem.innerHTML = `${e.name}`;
    }
}
