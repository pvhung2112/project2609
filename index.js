const express = require('express')
const flash = require('express-flash')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const app = express()

app.use(cookieParser('sdy89ewyiushdff')); //key tự tạo ra 
app.use(session({ cookie: { maxAge: 60000 }}));
app.use(flash());
require('dotenv').config();
var methodOverride = require('method-override')

const port = process.env.POST
const geturladm = require("./config/system.js")
console.log(__dirname);
app.set('views', `${__dirname}/views`)
app.set('view engine', 'pug')
app.use(express.static(`${__dirname}/public`))
app.locals.url_Adm = geturladm.url_adm;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'))
const database = require('./config/database')
const router = require("./routers/admin/index.router")
router(app)
database.connect();



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
