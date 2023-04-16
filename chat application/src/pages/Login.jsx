import React from 'react'
import Add from '../img/addAvatar.png'

const Login = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Lama chat</span>
                <span className='title'>Register</span>
                <form>
                    <input type='text' placeholder='display name' />
                    <input type='email' placeholder='email' />
                    <button>Sign in</button>
                </form>
                <p> you don't have an account? Register</p>
            </div>
        </div>
    )
}

export default Login;
