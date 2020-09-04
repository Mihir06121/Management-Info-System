import React, {useContext} from 'react';
import AuthService from '../Services/AuthService';
import {AuthContext} from '../Context/AuthContext';
import {Link, Redirect} from 'react-router-dom';

const Home = ()=>{
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
            <div className="container">
                <h1 align="center">Home Page</h1>
                <div className="row">
                    <div className="col-12 md-auto d-flex justify-content-around">
                        <Link to="/login">
                            <button className="btn btn-primary">Login</button>
                        </Link>
                        <Link to="/register">
                            <button className="btn btn-primary">Register</button>
                        </Link>
                    </div>
                </div>
            </div>

            { isAuthenticated &&
            <>
            <div className="container">
                <div className="row">
                    <div className="col-12 md-auto d-flex justify-content-around">
                        <Link to="/">
                            <button className="btn btn-primary" onClick={onClickLogoutHandler}>Log Out</button>
                        </Link>
                        {    
                            user.role === "admin" ? 
                                <Redirect to="/admin"/> : <Redirect to="/user"/>
                        }
                    </div>
                </div>
            </div>
            </>

            }
        </>
    )
}

export default Home;