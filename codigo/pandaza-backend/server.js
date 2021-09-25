const express = require('express');

const routes = require('./app/routes');

const port = 3000;
const app = express();

app.use('/api', routes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
