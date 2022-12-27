const express = require('express');
const app = express();

app.use(express.json);
app.use('/', require('./server/route/postsRoute'));
//app.use('/', require('./route/postsRoute'));


//app.listen(3000);
app.listen(3000, function () {
  console.log('Server is running');
});