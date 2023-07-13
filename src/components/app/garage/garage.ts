export default class Garage {
    constructor() {}

    setUp() {
        const garage = document.createElement('button');
        garage.className = 'btn_garage btn';
        garage.innerHTML = 'Garage';
        document.querySelector('.app')?.appendChild(garage);

        garage.addEventListener('click', this.garageSelect);
    }

    garageSelect() {
        // сюда впихнуть создание/display: block  кнопок update, create, инпутов и т.д...
    }
}
