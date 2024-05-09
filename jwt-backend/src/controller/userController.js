import * as userService from '../service/userService.js'
import * as loginRegisterService from '../service/loginRegisterService.js'

export const handleUserPage = (req, res) => {
    // let users = userService.getUserList()
    // console.log(">>>> check users: ", users)
    userService.getUserList()
        .then(userList => {
            console.log(userList); // In ra danh sách người dùng
        })
        .catch((error) => {
            console.error(error); // Xử lý lỗi nếu cóD
        });
    return res.render("user.ejs")
}

export const handleCreateNewUser = (req, res) => {
    let email = req.body.email
    let username = req.body.username
    let password = req.body.password

    connection.query(
        'select * from book',
        function (err, results, fields) {
            console.log(results)
            console.log(fields)
        }
    )

    return res.send('handleCreateNewUser')
}


export const handleRegister = async (req, res) => {
    try {
        // req.body: email, phone, username, password
        if(!req.body.email || !req.body.phone || !req.body.password) {
            return res.status(500).json({
                EM: 'Missing required parameters', // error message
                EC: '1', // error code
                DT: '' // data
            })
        }

        // console.log(">>>>", req.body)


        // service create user
        let data = await loginRegisterService.registerNewUser(req.body)

        return res.status(200).json({
            EM: data.EM, // error message
            EC: data.EC, // error code
            DT: '' // dataww
        })

        
       
    } catch(e) {
        return res.status(500).json({
            EM: 'error from server', // error message
            EC: '-1', // error code
            DT: '' // data
        })
    }
}

export const handleLogin = () => {
    
}