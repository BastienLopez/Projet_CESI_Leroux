const express = require('express');

class Server {
    constructor(port = 3000) {
        this.app = express();
        this.port = port;
    }

    start() {
        this.app.get('/', (req, res) => {
            res.send('Hello World!');
        });

        this.app.listen(this.port, () => {
            console.log(`Paris sportif app is listening on port ${this.port}`);
        });
    }
}

module.exports = Server;