import dotenv from 'dotenv'
dotenv.config()

const configCors = (app) => {
    // add headers before the routes are defined
    app.use((req, res, next) => {
        // website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', process.env.REACT_URL)

        // request method you wish to allow
        res.setHeader('Access-Control-Allow-Methods', '*')

        // request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

        // set to true if you need the website to include cookies in the requests sent 
        // to the API (e.g in case you sessions)
        res.setHeader('Access-Control-Allow-Crendentias', true)

        // pass to next layer of middeware
        next()
    })
}

export default configCors
