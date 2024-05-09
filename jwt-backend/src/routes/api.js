import express from "express"
import * as userController from '../controller/userController.js'

const router = express.Router()

/**
 * 
 * @param {*} app - express app
 */
const initApiRoutes = (app) => {
    // users
    router.post('/register', userController.handleRegister)
    router.post('/login', userController.handeLogin)


    return app.use('/api/v1/', router)
}

export default initApiRoutes