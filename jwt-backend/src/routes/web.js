import express from "express"
import * as homeController from '../controller/homeController.js'
import * as userController from '../controller/userController.js'

const router = express.Router()

/**
 * 
 * @param {*} app - express app
 */
const initWebRoutes = (app) => {
    router.get('/', homeController.handleHelloWorld)

    // users
    router.get('/users', userController.handleUserPage)
    router.post('/users', userController.handleCreateNewUser)

    return app.use('/', router)
}

export default initWebRoutes