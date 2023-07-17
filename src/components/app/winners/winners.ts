import { gotWinners } from '../../interface';

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

            this.getWinners(title);
        }
    }

    winnersSelect() {
        const getGarage = document.querySelector('.garage-wrapper');
        const getWinners = document.querySelector('.winners-wrapper');
        getGarage?.classList.add('inactive');
        getWinners?.classList.remove('inactive');
    }

    async getWinners(title: Element) {
        const response = await fetch('http://127.0.0.1:3000/winners?_page=1&_limit=7', {
            method: 'GET',
        });
        const winners = await response.json();
        const items = (await response.headers.get('X-Total-Count')) as string | number;

        title.innerHTML = `Winners (${items})`;
        const page = document.createElement('h3');
        page.innerHTML = `Page ${1}`;
        this.winnersUi?.appendChild(page);

        winners.forEach((e: gotWinners) => {
            const winnersItem = document.createElement('div');
            winnersItem.className = 'winners__item';
            this.winnersUi?.appendChild(winnersItem);

            winnersItem.innerHTML = `${e.id} ${e.time} ${e.wins}`;
        });
        console.log(winners, items);
    }
}
