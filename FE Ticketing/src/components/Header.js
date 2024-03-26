import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//import { signout } from "../slices/authSlice";
import "../css/header.css";
import { toast } from "react-toastify";
import { signout } from "../slices/authSlice";

import {Nav, Navbar} from "react-bootstrap";


function Header() {
    const signInStatus = useSelector(( state) => state.authSlice.status);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginid = sessionStorage["loginid"];
    console.log(loginid);
    const userrole = sessionStorage["userrole"];
    console.log(userrole);
    console.log(signInStatus);
    if ( userrole == "Admin"){
        var client = false;
        var admin = true;
       
    }
    else {
        var client = true;
        var admin = false;
    }



    return (

        <header className="shadow sticky z-50 top-0">



        <div className="nn1">
                <nav className="navbar navbar-expand-lg navbar-light bg-white border-gray-200 px-4 lg:px-6 py-2.5 bg-transparent xxm1" id="nav">
                    <div className="container-fluid user11 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="flex items-center">
                                    <img id="logo"
                                    alt="Logo"
                                     className="mr-3 h-12"
                                     src="\images\logo.jpg" width={100} />
                                </Link>
                            </li>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-1">
                                <li className="nav-item" id="xx">
                                    <Link
                                        className="nav-a active"
                                        aria-current="page"
                                        to=""
                                        id="xx"
                                    >
                                        Home
                                    </Link>
                                </li> 
                               <li className="nav-item" id="xx">
                                   <Link
                                       className="nav-a active"
                                       aria-current="page"
                                       to="overview"
                                       id="xx"
                                    >
                                      Overview
                                  </Link>
                               </li>

                         
                               {signInStatus && admin && (
                                <li className="nav-item " id="xx">
                                    <Link className="nav-a active"
                                       aria-current ="page"
                                       to="/register">
                                       Register
                                    </Link>
                                </li>
                               )}
                            

                                {signInStatus && client && (
                                    <li className="nav-item" id="xx">
                                        <Link className="nav-a active"
                                            aria-current="page"
                                            to="/raiseIssue">
                                            Raise Issue
                                        </Link>

                                    </li>
                                )}

                            {signInStatus && admin &&(
                                <li className="nav-item" id="xx">
                                    <Link className="nav-a active"
                                        aria-current="page"
                                         to="/allusers">
                                         Show All Users
                                    </Link>

                                </li>
                            )}

                            {signInStatus && admin && (
                                <li className="nav-item" id="xx">
                                    <Link className="nav-a active"
                                        aria-current="page" 
                                        to="/updateUser">
                                         Update Users
                                    </Link>

                                </li>
                            )}
                                {signInStatus && client && (
                                    <li className="nav-item" id="xx">
                                        <Link className="nav-a active"
                                            aria-current="page"
                                            to="/myissueList">
                                            MyIssueList
                                        </Link>

                                    </li>
                                )}

                            {signInStatus && admin && (
                                    <li className="nav-item" id="xx">
                                        <Link className="nav-a active"
                                            aria-current="page"
                                            to="/issueList">
                                            Get All Issue
                                        </Link>

                                    </li>
                            )}


                           

                           
                               
                            
                            { !signInStatus && (
                            <li className="nav-item dropdown" id="xy">
                                <a
                                    className="nav-a dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Login
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="login">
                                            Client
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="admin">
                                            Admin
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            )}

                            { signInStatus &&  ( 
                                <li className="nav-item " id="xyy" >
                                    <Link 
                                       className="nav-a-active"
                                       aria-current="page"
                                       onClick={() => {
                                        // for go to signin page
                                        toast.error("signout done !" );
                                        setTimeout(() =>{
                                            navigate("/")
                                        },1000)
                                        
                                        dispatch(signout());
                                       }}>
                                         Signout
                                    </Link>
                                </li>
                            )}
                            </ul>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        </header>
    );
}
export default Header;
