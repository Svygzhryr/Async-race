import { gotCars } from '../../interface';
import image from '../../../assets/car_icon.svg';

export default class CarItem {
    carData: gotCars;
    getCars: () => Promise<void>;
    currentPage: number;
    animation: Animation | null;
    wins: number;
    constructor(carData: gotCars, getCars: () => Promise<void>, currentPage: number) {
        this.carData = carData;
        this.getCars = getCars;
        this.currentPage = currentPage;
        this.animation = null;
        this.wins = 0;
    }

    initCar(carItems: Element) {
        const carItem = document.createElement('div');
        carItem.className = 'garage__item';
        carItem.innerHTML = this.carData.name;
        carItem.style.color = this.carData.color;
        carItems.appendChild(carItem);

        carItem.appendChild(document.createElement('br'));

        const carSelect = document.createElement('button');
        carSelect.className = 'btn-car btn-car_select';
        carSelect.innerHTML = 'Select';
        carSelect.addEventListener('click', () => {
            this.selectCar(this.carData.id);
        });
        carItem.appendChild(carSelect);

        const carRemove = document.createElement('button');
        carRemove.className = 'btn-car btn-car_remove';
        carRemove.innerHTML = 'Remove';
        carRemove.addEventListener('click', () => {
            this.removeCar(this.carData.id);
        });
        carItem.appendChild(carRemove);

        carItem.appendChild(document.createElement('br'));

        const carStart = document.createElement('button');
        carStart.className = 'btn-car btn-car_start';
        carStart.innerHTML = 'A';
        carStart.addEventListener('click', (e: Event) => {
            this.startEngine(this.carData.id, e.target as HTMLElement);
        });
        carItem.appendChild(carStart);

        const carStop = document.createElement('button');
        carStop.className = 'btn-car btn-car_stop input_inactive';
        carStop.innerHTML = 'B';
        carStop.addEventListener('click', (e: Event) => {
            this.stopEngine(this.carData.id, e);
        });
        carItem.appendChild(carStop);

        const carImg = document.createElement('div');
        carImg.innerHTML = image;
        carImg.className = 'car';
        carImg.style.fill = this.carData.color;
        carItem.appendChild(carImg);
    }

    async removeCar(id: number) {
        await fetch(`http://127.0.0.1:3000/garage/${id}`, {
            method: 'DELETE',
        });
        this.getCars();
    }

    async selectCar(id: number) {
        sessionStorage.setItem('selectedCarId', id.toString());
        document.querySelector('.update-wrapper')?.classList.remove('input_inactive');
    }

    async startEngine(id: number, e?: HTMLElement, isRace?: boolean) {
        const startButton = e as HTMLElement;
        const nameElement = e?.previousSibling?.previousSibling?.previousSibling?.previousSibling
            ?.previousSibling as HTMLElement;
        const carName = nameElement.textContent;
        const stopButton = startButton.nextSibling as HTMLElement;
        const carElement = startButton.nextSibling?.nextSibling as HTMLElement;
        const response = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=started`, {
            method: 'PATCH',
        });
        carElement.style.marginLeft = '0px';
        stopButton.classList.remove('input_inactive');
        // if (response.ok) {
        const carSpecs = await response.json();
        // } else {
        //     console.log('Cant get specified car');
        // }
        let calculateWidth = 0;
        try {
            const road = document.querySelector('.garage__item') as HTMLElement;
            const roadWidth = +getComputedStyle(road).width.slice(0, -2) as number;
            calculateWidth = roadWidth - 100;
        } catch {
            null;
        }
        const driving = [{ marginLeft: '0px' }, { marginLeft: `${calculateWidth}px` }];
        const duration = carSpecs.distance / carSpecs.velocity;

        const animation = carElement.animate(driving, {
            duration: duration,
        });
        this.animation = animation;
        animation.addEventListener('finish', () => {
            carElement.style.marginLeft = `${calculateWidth}px`;
        });
        startButton?.classList.add('input_inactive');

        const driveResponse = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=drive`, {
            method: 'PATCH',
        });
        // const driveResponseJson = await driveResponse.json();
        if (driveResponse.status === 500) {
            const driven = getComputedStyle(carElement).marginLeft;
            animation.pause();
            animation.cancel();
            carElement.style.marginLeft = driven;
            stopButton.classList.add('input_inactive');
            startButton.classList.remove('input_inactive');
            console.log('Car has been broken!');
            throw new Error('Car has been broken!');
        }

        startButton.classList.remove('input_inactive');
        stopButton.classList.add('input_inactive');

        if (isRace && driveResponse.ok) {
            const finishTime = (duration / 1000).toFixed(2);
            this.wins++;
            return [
                {
                    id: this.carData.id,
                    wins: this.wins,
                    time: finishTime,
                },
                `${carName} finished first in <strong>${finishTime}</strong> seconds!`,
            ];
        }
    }

    async stopEngine(id: number, e: Event) {
        const stopButton = e.target as HTMLElement;
        const startButton = stopButton.previousSibling as HTMLElement;
        const response = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=stopped`, {
            method: 'PATCH',
        });
        if (response.ok) {
            if (this.animation) {
                this.animation.cancel();
            }
            startButton.classList.remove('input_inactive');
            stopButton.classList.add('input_inactive');
        }
    }
}
