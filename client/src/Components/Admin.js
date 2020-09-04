import React, {useContext} from 'react';
import {Link, Redirect} from 'react-router-dom';
// import AuthService from '../Services/AuthService';
// import {AuthContext} from '../Context/AuthContext';

const Admin = ()=>{

    // const {setIsAuthenticated,setUser} = useContext(AuthContext);

    const onClickLogoutHandler = () => {
        // AuthService.logout().then(data=>{
        //     if(data.success){
        //         setUser(data.user);
        //         setIsAuthenticated(false);
        //     }
        // });
        <Redirect to="/login"/>
    }

    return (
        <div className="container">
            <h1 align="center">Admin Page</h1>
                <button className="btn btn-primary" onClick={onClickLogoutHandler}>Log Out</button>
        </div>
       
    )
    
    
}
export default Admin;