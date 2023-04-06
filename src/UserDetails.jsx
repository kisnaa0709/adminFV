import React from 'react'
import logo from "./images/logo.png"
import btn from "./images/btn.png"
import dot from "./images/dot.png"
import loac from "./images/loac.png"
import Navbar from './components/navbar'
import { useLocation, useNavigate } from 'react-router-dom'
import { axiosDelete, axiosGet } from './utils/axiosRequest'

function UserDetails(){
    const navigate = useNavigate()
    const location = useLocation(); 
    const data = location.state.data.data
    console.log(data);

    function edit(e){
        e.preventDefault()
        console.log("Success");
    }
    function changePassword(e){
        e.preventDefault()
        console.log("Success");
    }
    function forcePassword(e){
        e.preventDefault()
        const url = `/admin/forcePasswordChange/${data._id}`
        console.log(data._id);
        axiosGet(url , (callBack) => {
            if(callBack?.status === 200){
                alert(callBack.message)
            } else {
                alert(callBack.message)
            }
        })
    }
    function suspend(e){
        e.preventDefault()
        const url = `/admin/accountSuspend/${data._id}`
        console.log(data._id);
        axiosGet(url , (callBack) => {
            if(callBack?.status === 200){
                console.log(callBack);
                alert(callBack.message)
            } else {
                alert(callBack.message)
            }
        })
    }

    function deleted(e){
        e.preventDefault()
        const url = `/admin/deleteAdmin/${data._id}`
            axiosDelete(url , (callBack) => {
                if(callBack?.status === 200){
                    console.log(callBack);
                    alert(callBack.message)
                    navigate('/dashboard')
                } else {
                    alert(callBack.message)
                }
            })
    }



    return (
        <div>
            <div className="main-wrapper">
                <div className="row g-0">
                    <Navbar/>
                    <div className="col-lg-10 right-col">
                        <div className="desh-right">
                            <div className="desh-right-cnt-wrap desh-right-cnt-wrap2">
                                <div className="desh-topbar d-block d-lg-none">
                                    <div className="row align-items-center">
                                        <div className="desh-top-left">
                                            <div className="menu-btn d-block d-lg-none">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="back-btn">
                                    <a href="" onClick={()=>{navigate("/dashboard")}}>Back</a>
                                </div>

                                <div className="contact-title">
                                    <h3>User Information:</h3>
                                    <h6>{data.fullName}<span> {data.email}</span></h6>
                                </div>  

                            <div className="contact-area">
                                <div className="row">
                                    <div className="col-xl-9 order-2 order-xl-1">
                                        <div className="contact-left">
                                            <form action="">
                                                <div className="contact-box">
                                                        <div className="input-item-wrap input-item-wrap2">
                                                            <div className="input-title">
                                                                <h5>User Number</h5>
                                                            </div>
                                                            <div className="input-box">
                                                            <input type="text" placeholder={data._id} /> 
                                                            </div>
                                                            <div className="input-loac">
                                                                <img src={loac} alt="" />
                                                            </div>
                                                        </div>

                                                        <div className="input-item-wrap">
                                                            <div className="input-title">
                                                                <h5>First Name</h5>
                                                            </div>
                                                            <div className="input-box">
                                                            <input type="text" placeholder={data.fullName} /> 
                                                            </div>
                                                            <div className="input-loac">
                                                                <img src={loac} alt="" />
                                                            </div>
                                                        </div>

                                                        <div className="input-item-wrap">
                                                            <div className="input-title">
                                                                <h5>Last Name</h5>
                                                            </div>
                                                            <div className="input-box">
                                                            <input type="text" placeholder={data.fullName} /> 
                                                            </div>
                                                            <div className="input-loac">
                                                                <img src={loac} alt="" />
                                                            </div>
                                                        </div>

                                                        <div className="input-item-wrap">
                                                            <div className="input-title">
                                                                <h5>Join Date</h5>
                                                            </div>
                                                            <div className="input-box">
                                                            <input type="text" placeholder={(data.createdAt).slice(0,10)} /> 
                                                            </div>
                                                            <div className="input-loac">
                                                                <img src={loac} alt="" />
                                                            </div>
                                                        </div>

                                                        <div className="input-item-wrap">
                                                            <div className="input-title">
                                                                <h5>Email Address</h5>
                                                            </div>
                                                            <div className="input-box">
                                                            <input required type="text" placeholder={data.email} /> 
                                                            </div>
                                                            <div className="input-loac">
                                                                <img src={loac} alt="" />
                                                            </div>
                                                        </div>

                                                        <div className="input-item-wrap">
                                                            <div className="input-title">
                                                                <h5>Mobile Number</h5>
                                                            </div>
                                                            <div className="input-box">
                                                            <input type="text" placeholder={data.phone} /> 
                                                            </div>
                                                            <div className="input-loac">
                                                                <img src={loac} alt="" />
                                                            </div>
                                                        </div>

                                                        <div className="input-item-wrap">
                                                            <div className="input-title">
                                                                <h5>Subscription Type</h5>
                                                            </div>
                                                            <div className="input-box input-select">
                                                            <select>
                                                                <option value="">Free</option>
                                                                <option value="">$4.99 (50 per month)</option>
                                                                <option value="">$9.99 (100 per month)</option>
                                                                <option value="">$39.99 (Unlimited)</option>
                                                                <option value="">Super User (Free Unlimited)</option>
                                                            </select>
                                                            </div>
                                                            <div className="input-loac">
                                                                <img src={loac} alt="" />
                                                            </div>
                                                        </div>

                                                        <div className="input-item-wrap">
                                                            <div className="input-title">
                                                                <h5>Successful Invites</h5>
                                                            </div>
                                                            <div className="input-box">
                                                            <input type="text" placeholder="08" /> 
                                                            </div>
                                                            <div className="input-loac">
                                                                <img src={loac} alt="" />
                                                            </div>
                                                        </div>

                                                        <div className="input-item-wrap">
                                                            <div className="input-title">
                                                                <h5># of Free Credits</h5>
                                                            </div>
                                                            <div className="input-box">
                                                            <input type="text" placeholder="12" /> 
                                                            </div>
                                                            <div className="input-loac">
                                                                <img src={loac} alt="" />
                                                            </div>
                                                        </div>
                                                </div>
                                                <div className="contact-submit text-center">
                                                    <input type="submit" value="Save Profile"/>
                                                </div>   
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 order-1 order-xl-2">
                                        <div className="contact-right text-end">
                                            <div className="contact-btn1 contact-btn">
                                                <a href="" onClick={(e)=>edit(e)}>Edit</a>
                                            </div>
                                            <div className="contact-btn2 contact-btn">
                                                <a href="" onClick={(e)=>changePassword(e)}>Change Password</a>
                                            </div>
                                            <div className="contact-btn3 contact-btn">
                                                <a href="" onClick={(e)=>forcePassword(e)}>Force Password<br/> Change</a>
                                            </div>
                                            <div className="contact-btn4 contact-btn">
                                                <a href="" onClick={(e)=>suspend(e)}>Suspend</a>
                                            </div>
                                            <div className="contact-btn5 contact-btn">
                                                <a href="" onClick={(e)=>deleted(e)}>Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>  
                        </div>
                    </div>
                </div>  
            </div>

            
            <div className="side-bar d-block d-lg-none">
                <div className="mobil-item-wrap">
                    <div className="mobil-logo-wraper d-flex align-items-center justify-content-between">
                    <div className="mobil-logo">
                        <a href="#">
                            <img className="img-fluid" src="images/logo.svg" alt="" />
                        </a>
                    </div> 
                        <div className="close-btn">
                        <span className="close-icon"></span>
                        </div>
                    </div>
                    <div className="logout-btn">
                        <a href="#"><span><img src="images/btn.png" alt="" /></span>Logout</a>
                        <div className="logout-inner">
                            <img src="images/dot.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <script src="js/jquery-3.4.1.min.js"></script>


            <script src="js/custom.js"></script>

            <a href="#" className="scrolltotop"><i className="fa-solid fa-angle-up"></i></a>
        </div>
    )
}

export default UserDetails;