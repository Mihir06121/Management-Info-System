import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import AuthService from '../Services/AuthService';
import { AuthContext } from '../Context/AuthContext';

const Navigation = (props) =>{
    const {isAuthenticated,user,setIsAuthenticated,setUser} = useContext(AuthContext);
    
    const onClickLogoutHandler = ()=>{
        AuthService.logout().then(data=>{
            if(data.success){
                setUser(data.user);
                setIsAuthenticated(false);
            }
        });
    }
    
 return (
     <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="mainNav">
            <div className="container">
                <Link className="navbar-brand" to="/">SLRTDC</Link>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        { isAuthenticated &&
                            <>
                                {    
                                    user.role === "admin" ? 
                                        <Link to="/admin">
                                            <li className="nav-item nav-link">
                                                Admin
                                            </li>
                                        </Link> : null
                                }
                                <li className="nav-item">
                                    <div 
                                        onClick={onClickLogoutHandler}
                                        className="nav-link">Logout
                                    </div>
                                </li>
                            </>
                        }
                        { !isAuthenticated &&
                            <>
                                <li className="nav-item">
                                    <Link 
                                        className="nav-link" 
                                        to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link 
                                        className="nav-link" 
                                        to="/register">Register</Link>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    </>
 )
}



export default Navigation;