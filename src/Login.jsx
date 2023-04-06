import React, { useState } from 'react'
import { axiosPost } from './utils/axiosRequest';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()
    function login(e){
        e.preventDefault()
        const body ={
            email : email.toLowerCase(),
            password : password
        }
        axiosPost("/user/login", body, (callBack) => {
            if(callBack?.status === 200){
                console.log(callBack.data)   
                if (callBack.data.data.roles[0] === 'admin') {
                    localStorage.setItem('adminBearer', callBack.data.Authorization)
                    console.log(callBack.data.Authorization);
                    navigate('/dashboard')
                } else {
                    alert("You are not an admin")
                }
            } else {
                alert(callBack.message)
            }
        })
    }
  return (
    <body>
        <div className="login-area">
            <div className="login-box">
               <form onSubmit={(e)=>login(e)}>
                    <div className="login-email">
                        <input required type="text" placeholder="Email Address" value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="login-password">
                        <input type="text" placeholder="Password" value={password}
                        onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className="login-submit">
                        <input type="submit" value="Log In"/>
                    </div>
               </form>
            </div>
        </div>

        <script src="js/jquery-3.4.1.min.js"></script>

        <script src="js/custom.js"></script>

        <a href="#" className="scrolltotop"><i className="fa-solid fa-angle-up"></i></a>
    </body>
  )
}

export default Login;