const express = require('express');
const portNumber=process.env.PORT || 9000;

const app = express();

app.listen(portNumber, () => console.log('Server listening at port ',portNumber))