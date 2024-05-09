import { useState } from 'react';
import './Login.scss'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

import { loginUser } from '../../services/userService'

const Login = (props) => {
    const navigate = useNavigate();
    const [valueLogin, setValueLogin] = useState("")
    const [password, setPassword] = useState("")


    const handleLogin = async () => {
        if(!valueLogin) {
            toast.error('please enter email or phone')
            return
        }
        if(!password) {
            toast.error('please enter password')
            return
        }
        
        let response = await loginUser(valueLogin, password)
        
    }

    const handleCreateNewAccount = () => {
        navigate('/register')
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
                        <input
                            value={valueLogin}
                            onChange={(e) => setValueLogin(e.target.value)}
                            className='form-control' placeholder='Email address or phone number' type='text' />
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='form-control' placeholder='Password' type='password' />
                        <button className='btn btn-primary' onClick={() => handleLogin()}>Login</button>
                        <span className='text-center'>Forgot your password</span>
                        <hr />
                        <div className='text-center'>
                            <button onClick={() => handleCreateNewAccount()} className='btn btn-success'>Create new account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Login