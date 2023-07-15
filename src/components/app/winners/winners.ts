export default class Winners {
    app: Element | null;
    menu: Element | null;
    winnersUi: Element | null;
    constructor() {
        this.app = document.querySelector('.app');
        this.menu = document.querySelector('.menu');
        this.winnersUi = document.createElement('div');
    }

    setUp() {
        const winners = document.createElement('button');
        winners.className = 'btn_winners btn';
        winners.innerHTML = 'Winners';
        this.menu?.appendChild(winners);
        this.winnersView();

        winners.addEventListener('click', this.winnersSelect);
    }

    winnersView() {
        if (this.winnersUi) {
            this.winnersUi.className = 'winners-wrapper inactive';
            this.app?.appendChild(this.winnersUi as Element);

            const title = document.createElement('h2');
            title.className = 'winners__title';
            title.innerHTML = 'Winners';
            this.winnersUi.appendChild(title);
        }
    }

    winnersSelect() {
        const getGarage = document.querySelector('.garage-wrapper');
        const getWinners = document.querySelector('.winners-wrapper');
        getGarage?.classList.add('inactive');
        getWinners?.classList.remove('inactive');
    }
}
