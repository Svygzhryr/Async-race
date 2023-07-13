export default class Winners {
    constructor() {}

    setUp() {
        const winners = document.createElement('button');
        winners.className = 'btn_winners btn';
        winners.innerHTML = 'Winners';
        document.querySelector('.app')?.appendChild(winners);
    }
}
