const express = require('express')
const path = require('path')

const app = express();

app.use('/', express.static(path.join(__dirname, 'Front-end')));

app.listen(2345, () => console.log('Website open on http://localhost:2345'))
