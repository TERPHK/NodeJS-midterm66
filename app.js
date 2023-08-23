const express = require('express');
const bodyParser = require('body-parser');
const Controller = require('./controllers/Controller');

const app = express();
const PORT = process.env.PORT || 8081;

app.use(bodyParser.json());

app.post('/que1', Controller.que1Controller);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
