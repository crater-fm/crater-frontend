const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

if (process.env.ACTIVE_ENV = 'DEV') {
    var port = process.env.DEV_PORT
} else if (process.env.ACTIVE_ENV = 'PROD') {
    var port = process.env.PROD_PORT
}

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Server is listening on port ${port}...`));