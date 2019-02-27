const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const tweetsController = require('./server/controllers/TweetsController');
const userController = require('./server/controllers/UsersController');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});

app.post('/api/tweets/', tweetsController.create);
app.get('/api/tweets/', tweetsController.list);
app.get('/api/tweets/:id', tweetsController.retrieve);
app.put('/api/tweets/:id', tweetsController.update);
app.del('/api/tweets/:id', tweetsController.delete);
app.post('/api/register/',userController.create);