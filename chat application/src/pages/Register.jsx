import React from 'react'
import Add from '../img/addAvatar.png'

const Register = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Lama chat</span>
                <span className='title'>Register</span>
                <form>
                    <input type='text' placeholder='display name' />
                    <input type='email' placeholder='email' />
                    <input type='password' placeholder='password' />
                    <lable>
                        <input style={{display:'none'}} type='file' />
                        <img src={Add} alt='+' />
                        <span>Add an avatar</span>
                    </lable>
                    <button>Sign up</button>    
                </form>
                <p> you do have an account? Login</p>
            </div>
        </div>
    )
}

export default Register
