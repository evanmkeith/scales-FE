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
                <div> 
                    <NavLink
                        to='/profile'
                    >
                        Profile
                    </NavLink>
                    <NavLink
                        to='/search'
                    >
                        Search
                    </NavLink>
                    <NavLink
                        to='/playlist'
                    >
                        Playlist
                    </NavLink>
                    <NavLink 
                        to="/"
                        onClick={handleLogout}
                    >                   
                    Logout    
                    </NavLink>
                </div>
            </>
        )
    } else {
        return(
            <>
                <Login user={props.user} setUser={props.setUser}/>
            </>
        )
    };
};