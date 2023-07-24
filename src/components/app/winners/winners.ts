import { gotWinners } from '../../interface';

export default class Winners {
    app: Element | null;
    menu: Element | null;
    winnersUi: Element | null;
    constructor() {
        this.app = document.querySelector('.app');
        this.menu = document.querySelector('.menu');
        this.winnersUi = document.createElement('div') as HTMLElement;
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

            const page = document.createElement('h3');
            page.innerHTML = `Page ${1}`;
            this.winnersUi?.appendChild(page);

            const table = document.createElement('table');
            table.className = 'winners__table';
            this.winnersUi?.appendChild(table);

            const signs = document.createElement('tr');
            table.appendChild(signs);

            const place = document.createElement('th');
            place.innerHTML = '№';
            signs.appendChild(place);

            const image = document.createElement('th');
            image.innerHTML = 'Car image';
            signs.appendChild(image);

            const name = document.createElement('th');
            name.innerHTML = 'Name';
            signs.appendChild(name);

            const wins = document.createElement('th');
            wins.innerHTML = 'Wins';
            signs.appendChild(wins);

            const time = document.createElement('th');
            time.innerHTML = 'Best time';
            signs.appendChild(time);

            this.getWinners(title, page);
        }
    }

    winnersSelect() {
        const getGarage = document.querySelector('.garage-wrapper');
        const getWinners = document.querySelector('.winners-wrapper');
        getGarage?.classList.add('inactive');
        getWinners?.classList.remove('inactive');
    }

    async getWinners(title: Element, page: Element) {
        const response = await fetch('http://127.0.0.1:3000/winners?_page=1&_limit=7');
        const winners = await response.json();
        const items = response.headers.get('X-Total-Count') as string | number;

        title.innerHTML = `Winners (${items})`;
        page.innerHTML = `Page ${1}`;

        winners.forEach((winnerData: gotWinners) => {
            const winnersItem = document.createElement('div');
            winnersItem.className = 'winners__item';
            this.winnersUi?.appendChild(winnersItem);

            winnersItem.innerHTML = `${winnerData.id} ${winnerData.time} ${winnerData.wins}`;
        });
    }
}
