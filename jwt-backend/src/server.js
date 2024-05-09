import express from "express"
import conifgViewEngine from './config/viewEngine.js'
import initWebRoutes from './routes/web.js'
import initApiRoutes from './routes/api.js'
import bodyParser from 'body-parser'
import configCors from './config/cors.js'
import dotenv from 'dotenv'
import db from './models/index.js'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080

// config cors
configCors(app)

// config view engine
conifgViewEngine(app)

// config body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// init web routes
initWebRoutes(app)

// init api routes
initApiRoutes(app)

app.listen(PORT, () => {
    console.log('>>> JWT Backend is running on the PORT = ' + PORT)
})
