import { gotWinners } from '../../interface';
import image from '../../../assets/car_icon.svg';
import CarItem from '../garage/car';

export default class Winners {
    app: Element | null;
    menu: Element | null;
    winnersUi: Element | null;
    winnerNumber: number;
    constructor() {
        this.app = document.querySelector('.app');
        this.menu = document.querySelector('.menu');
        this.winnersUi = document.createElement('div') as HTMLElement;
        this.winnerNumber = 0;
    }

    setUp(totalCars: Array<CarItem>) {
        const winners = document.createElement('button');
        winners.className = 'btn_winners btn';
        winners.innerHTML = 'Winners';
        this.menu?.appendChild(winners);
        this.winnersView();

        winners.addEventListener('click', () => {
            this.winnersSelect(totalCars);
        });
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
            page.className = 'winners__page';
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
        }
    }

    winnersSelect(totalCars: Array<CarItem>) {
        const getGarage = document.querySelector('.garage-wrapper');
        const getWinners = document.querySelector('.winners-wrapper');
        getGarage?.classList.add('inactive');
        getWinners?.classList.remove('inactive');
        this.getWinners(totalCars);
    }

    async getWinners(totalCars: Array<CarItem>) {
        document.querySelectorAll('.winners__item').forEach((e) => {
            e.remove();
        });
        const response = await fetch('http://127.0.0.1:3000/winners?_page=1&_limit=10');
        const winners = await response.json();
        const items = response.headers.get('X-Total-Count') as string | number;
        const title = document.querySelector('.winners__title') as HTMLElement;
        const page = document.querySelector('.winners__page') as HTMLElement;
        console.log(winners);

        // console.log(carsOnPage.find((e) => e.carData.id === winners));

        title.innerHTML = `Winners (${items})`;
        page.innerHTML = `Page ${1}`;

        winners.forEach((winnerData: gotWinners) => {
            this.winnerNumber++;
            const table = document.querySelector('.winners__table') as HTMLElement;
            const winnerNumber = this.winnerNumber.toString();
            const winsString = winnerData.wins++ ?? 1;
            const winsNumber = winsString.toString();
            const time = winnerData.time.toString();

            const winnersItem = document.createElement('tr');
            winnersItem.className = 'winners__item';
            table.appendChild(winnersItem);

            const number = document.createElement('td');
            number.innerHTML = winnerNumber;
            winnersItem.appendChild(number);

            const carImg = document.createElement('td');
            carImg.innerHTML = image;
            carImg.className = 'car';
            totalCars.find((e) => {
                if (e.carData.id == winnerData.id) {
                    carImg.style.fill = e.carData.color;
                }
            });
            winnersItem.appendChild(carImg);

            const name = document.createElement('td');
            totalCars.find((e) => {
                if (e.carData.id == winnerData.id) {
                    name.innerHTML = e.carData.name;
                }
            });

            winnersItem.appendChild(name);

            const wins = document.createElement('td');
            wins.innerHTML = winsNumber;
            winnersItem.appendChild(wins);

            const bestTime = document.createElement('td');
            bestTime.innerHTML = time;
            winnersItem.appendChild(bestTime);
        });
    }
}
