const express = require('express');
const app = express();

app.use('/', require('./server/route/postsRoute'));

app.listen(3000);
