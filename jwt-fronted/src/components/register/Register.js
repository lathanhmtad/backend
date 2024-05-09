import { useState } from 'react';
import './Register.scss'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as userService from '../../services/userService'

const Register = (props) => {
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate()

    const isValidInputs = () => {
        if (!email) {
            toast.error("Email is required!")
            return false
        }
        if (!password) {
            toast.error("Password is required!")
            return false
        }
        if (!userName) {
            toast.error("UserName is required!")
            return false
        }

        return true
    }

    const handleRegister = async () => {
        let check = isValidInputs()
        
        if(check) {
            let response = await userService.registerNewUser(email, phone, userName, password)
            console.log(response)
        }
      
    }

    const handeLogin = () => {
        navigate('/login')
    }
    return (
        <div className="login-container mt-5">
            <div className="container">
                <div className="row">
                    <div className="content-left col-7 d-md-block d-none">
                        <div className='brand'>
                            Nguyen Dang Duy
                        </div>
                        <div className='detail'>
                            Learning everything
                        </div>
                    </div>
                    <div className="content-right col-12 col-md-5 d-flex flex-column gap-3 py-3">
                        <div className='form-group'>
                            <label>Email: </label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='form-control' placeholder='Email address or phone number' type='text' />
                        </div>
                        <div className='form-group'>
                            <label>Phone number: </label>
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className='form-control' placeholder='Phone number' type='text' />
                        </div>
                        <div className='form-group'>
                            <label>User name: </label>
                            <input
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                className='form-control' placeholder='Phone number' type='text' />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='form-control' placeholder='Password' type='password' />
                        </div>
                        <div>
                            <label>Re-enter password:</label>
                            <input
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className='form-control' placeholder='Re-enter-password' type='password' />
                        </div>
                        <button className='btn btn-primary' onClick={() => handleRegister()}>Register</button>
                        <hr />
                        <div className='text-center'>
                            <button onClick={() => handeLogin()}
                                className='btn btn-success'>Already've an account. Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Register