import React, {useState} from 'react'
import '../auth.css'
import { ToastContainer, toast } from 'react-toastify'
import config from '../../config';
const LoginPage = () => {

    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log('Form submitted');
        try {
        const response = await fetch(config.API_BASE_URL + '/admin/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({ email, password }),
            credentials: "include"
        })
        const data = await response.json();
        console.log('Form submittedd');
        if (data.ok) {
            
            // Handle successful signup,e-g-, show a success message
            console.log('Admin registration successful', data);
            
            toast.success('Admin Registration Successful'
            // , {
            //     position: toast.POSITION.TOP_CENTER,
            // }
            );
            window.location.href = "/pages/addworkout";
        }
        else {
        // Handle signup error
        console.error ('Admin registration failed', response.statusText);
        // toast. error ('Admin Registration Failed', {
        //     position: toast.POSITION.TOP_CENTER,
        // });
        }
        }
        catch (error) {
            // toast.error('An error occured during registeration');
            console.error('An error occured during registeration')
        }
    }

  return (
    <div className='formpage'>
        <form onSubmit={handleLogin}>
        <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default LoginPage