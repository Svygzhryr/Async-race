import Garage from './garage/garage';
import Winners from './winners/winners';

class App {
    constructor() {}

    start() {
        const app = document.createElement('div');
        app.className = 'app';
        document.body.appendChild(app);

        const garage = new Garage();
        const winners = new Winners();
        garage.setUp();
        winners.setUp();
    }
}

export default App;
