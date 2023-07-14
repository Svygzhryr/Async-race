export default class Winners {
    app: Element | null;
    menu: Element | null;
    constructor() {
        this.app = document.querySelector('.app');
        this.menu = document.querySelector('.menu');
    }

    setUp() {
        const winners = document.createElement('button');
        winners.className = 'btn_winners btn';
        winners.innerHTML = 'Winners';
        this.menu?.appendChild(winners);
    }

    winnersView() {
        const winnersUi = document.createElement('div');
        winnersUi.className = 'winners-wrapper';
        this.app?.appendChild(winnersUi);
    }
}
