import React from 'react'
import logo from "../images/logo.png"
import btn from "../images/btn.png"
import dot from "../images/dot.png"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();

  function logout(e){
    e.preventDefault()
    localStorage.removeItem("adminBearer")
    navigate("/")
  }
  return (
  <div className="col-lg-2 left-col d-none d-lg-block">
    <div className="desh-left">
        <div className="logo-item">
            <a href="#">
            <img className="img-fluid" src={logo} alt="" />
            </a>
        </div>
        <div className="logout-btn" >
            <a href="" onClick={(e)=>logout(e)}><span><img src={btn} alt="" /></span>Logout</a>
            <div className="logout-inner">
                <img src={dot} alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar;