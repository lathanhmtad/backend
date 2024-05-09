import { Routes, Route } from 'react-router-dom'
import Nav from './components/navigation/Nav'
import Login from './components/login/Login'
import Register from './components/register/Register'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Users from './components/manage_users/User'

function App() {
  return (
    <div>
      <Nav />
      <div className='app-container'>
        <Routes>
          <Route path='/' element={<div>Home</div>} />
          <Route path='/news' element={<div>New</div>} />
          <Route path='/about' element={<div>About</div>} />
          <Route path='/contact' element={<div>Contact</div>} />
          <Route path='/users' element={<Users />} />
          <Route path='/login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='*' element={<div>404 Not found</div>} />
        </Routes>
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App
