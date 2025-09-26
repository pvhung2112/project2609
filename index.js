const express = require('express')
const flash = require('express-flash')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const methodOverride = require('method-override')
require('dotenv').config()

const app = express()

app.use(cookieParser('sdy89ewyiushdff'))
app.use(session({ cookie: { maxAge: 60000 }}))
app.use(flash())

const geturladm = require("./config/system.js")
app.set('views', `${__dirname}/views`)
app.set('view engine', 'pug')
app.use(express.static(`${__dirname}/public`))
app.locals.url_Adm = geturladm.url_adm

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

const database = require('./config/database')
const router = require("./routers/admin/index.router")

router(app)
database.connect()


module.exports = app
