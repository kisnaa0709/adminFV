import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar';
import { axiosGet, axiosPost } from './utils/axiosRequest';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import UserDetails from './UserDetails';

function UserList(){

    const [page, setPage] = useState(10)
    const [dayCount, setDayCount] = useState()
    const [monthCount, setMonthCount] = useState()
    const [totalCount, setTotalCount] = useState()
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{

    axiosGet("/admin/analytics", (callBack) => {
        if(callBack?.status === 200){
            setDayCount(callBack.data.dayCount)
            setMonthCount(callBack.data.monthCount)
            setTotalCount(callBack.data.totalCount)
        } else {
            alert(callBack.message)
        }
    })

    axiosGet("/admin/list", (callBack) => {
        if(callBack?.status === 200){
            console.log(callBack.data);
            setData(callBack.data)
        } else {
            alert(callBack.message)
        }
    })
  
    }, [])

    const PER_PAGE = 10;
    const pageCount = Math.ceil(totalCount / PER_PAGE);

    const handlePageClick = ({selected: selectedPage}) => {
    const pages = selectedPage+1
    const url = `/admin/list?pageNo=${selectedPage+1}&pageSize=${PER_PAGE}`
    axiosGet(url , (callBack) => {
        if(callBack?.status === 200){
            setPage(pages * 10)
            console.log(page);
            console.log(callBack.data);
            setData(callBack.data)
        } else {
            alert(callBack.message)
        }
    })
    }

    const currentPageData = 
        data.map((data, index)=>{
        const fullName = (data.fullName).split(' ')
        console.log(fullName);
        const firstName = fullName[0]
        const lastName = fullName[fullName.length - 1]
        return(
        <tr onClick={()=>profile(data)}>
            <td>{(totalCount-(totalCount-(index+page+1)))-10}</td>
            <td>{(firstName.charAt(0)).toUpperCase() + firstName.slice(1)}</td>
            <td>{(lastName.charAt(0)).toUpperCase() + lastName.slice(1)}</td>
            <td>{(data.createdAt).slice(0,10)}</td>
            <td>{data.email}</td>
            <td>none</td>
        </tr>
        )
    })

    function profile(data){
      navigate('/profileView',{state:{data: {data}}})
    }

  return (
    <body>
        <div className="main-wrapper">
            <div className="row g-0">
                <Navbar/>
                <div className="col-lg-10 right-col">
                    <div className="desh-right">
                        <div className="desh-right-cnt-wrap">
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

                            <div className="btn-area">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="btn-item btn-item1">
                                            <p>Today’s New Users</p>
                                            <h6>{dayCount}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="btn-item btn-item2">
                                            <p>Past 30 Day’s New Users</p>
                                            <h6>{monthCount}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="btn-item btn-item3">
                                            <p>All Users</p>
                                            <h6>{totalCount}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="search-area">
                               <form action="">
                                    <div className="search-item">
                                        <input type="text" placeholder="Search by name or email" />
                                    </div>
                               </form>
                            </div>

                            <div className="table-list-area">
                                <div className="table-box">
                                    <table>
                                    <tr>
                                    <th>No</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Join Data</th>
                                    <th>Email Address</th>
                                    <th>Subscription Type</th>
                                    </tr>
                                    {currentPageData}
                                    </table>
                                </div>
                            </div>

                            <div className="pagination-area">
                                <div className="pagination-item">
                                <div className="pagination">
                                <ReactPaginate
                                    previousLabel="Prev"
                                    nextLabel="Next"
                                    pageCount={pageCount}
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={2}
                                    breakLabel=".."
                                    forcePage={0}
                                    marginPagesDisplayed={2}
                                    renderOnZeroPageCount={null}
                                    containerClassName={"pagination"}
                                    previousLinkClassName={"pagination_link"}
                                    nextLinkClassName={"pagination_link"}
                                    disabledClassName={"pagination_link--disabled"}
                                    activeClassName={"pagination_link--active"}
                                    /> 
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
    </body>
  )
}

export default UserList;