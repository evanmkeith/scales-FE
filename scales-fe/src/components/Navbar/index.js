import { NavLink, useNavigate } from 'react-router-dom'; 
import React, { useEffect } from 'react';
import Login from '../Login';

export default function NavBar(props) {
    console.log(props.user);
    const user = props.user; 
    const navigate = useNavigate();

    const handleLogout = () => {
        props.setUser(null);
        localStorage.setItem("autoLog", true)
    }

    if(user){
        return(
            <>
                <div class="nav"> 
                    <NavLink
                        to='/profile'
                    >
                        profile
                    </NavLink>
                    <NavLink
                        to='/playlist'
                    >
                        playlist
                    </NavLink>
                    <NavLink
                        to='/search'
                    >
                        search
                    </NavLink>
                    <NavLink 
                        to="/"
                        onClick={handleLogout}
                    >                   
                        logout
                    </NavLink>
                </div>
            </>
        )
    } else {
        return(
            <>
                <div class="nav">
                <Login user={props.user} setUser={props.setUser}/>
                </div>
            </>
        )
    };
};