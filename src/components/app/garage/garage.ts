export default class Garage {
    app: Element | null;
    menu: Element | null;
    constructor() {
        this.app = document.querySelector('.app');
        this.menu = document.querySelector('.menu');
    }

    setUp() {
        const garage = document.createElement('button');
        garage.className = 'btn_garage btn';
        garage.innerHTML = 'Garage';
        this.menu?.appendChild(garage);

        garage.addEventListener('click', this.garageSelect);

        this.garageView();
    }

    garageView() {
        const garageUi = document.createElement('div');
        garageUi.className = 'garage-wrapper';
        this.app?.appendChild(garageUi);

        const resetWrapper = document.createElement('form');
        const createWrapper = document.createElement('form');
        const subMenuWrapper = document.createElement('form');
        resetWrapper.className = 'reset-wrapper';
        createWrapper.className = 'create-wrapper';
        subMenuWrapper.className = 'submenu-wrapper';
        garageUi.appendChild(resetWrapper);
        garageUi.appendChild(createWrapper);
        garageUi.appendChild(subMenuWrapper);

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
    }

    garageSelect() {
        // сюда впихнуть создание/display: block  кнопок update, create, инпутов и т.д...
    }
}
