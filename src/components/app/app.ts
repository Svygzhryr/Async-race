import Garage from './garage/garage';

class App {
    constructor() {}

    start() {
        const app = document.createElement('div');
        app.className = 'app';
        document.body.appendChild(app);

        const menu = document.createElement('div');
        menu.className = 'menu';
        app.appendChild(menu);

        const garage = new Garage();
        garage.setUp();
    }
}

export default App;
