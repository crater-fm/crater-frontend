const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

var port = process.env.PORT || 80

app.use(express.static(path.join(__dirname, 'frontend-react-app/build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Server is listening on port ${port}...`));