const express = require('express');
const cors = require('cors');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const bodyParser = require('body-parser');
const storeOption = require('./database/db');
const topicRouter = require('./routes/topic');
const indexRouter = require('./routes/index');

const app = express();
const sessionStore = new MySQLStore(storeOption);

app.use(bodyParser.urlencoded({extended : false}))
app.use(cors())
app.use(session({
    secret:'keyboard cat',
    saveUninitialized:false,
    resave: false,
    store:sessionStore
}))

app.use('/',indexRouter);
app.use('/topic',topicRouter);

app.listen(4000, () => console.log("Express Server On Port 4000"))
