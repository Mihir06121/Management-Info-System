// import React, {useContext} from 'react';
// import {Link} from 'react-router-dom';
// import AuthService from '../Services/AuthService';
// import {AuthContext} from '../Context/AuthContext';

// const User = ()=>{

//     const {setIsAuthenticated,setUser} = useContext(AuthContext);

//     const onClickLogoutHandler = ()=>{
//         AuthService.logout().then(data=>{
//             if(data.success){
//                 setUser(data.user);
//                 setIsAuthenticated(false);
//             }
//         });
//     }

//     return (
//         <div className="container">
//             <h1 align="center">User Page</h1>
//             <Link to="/login">
//                 <button className="btn btn-primary" onClick={onClickLogoutHandler}>Log Out</button>
//             </Link>
//         </div>
       
//     )
    
    
// }
// export default User;