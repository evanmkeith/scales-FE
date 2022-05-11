import { NavLink, useNavigate } from 'react-router-dom'; 
import React, { useEffect } from 'react';
import Login from '../Login';

export default function NavBar(props) {
    const user = props.user; 
    const navigate = useNavigate();


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
                        to='/touring_info'
                    >
                        Touring Info
                    </NavLink>
                    <NavLink
                        to='/listen'
                    >
                        Listen
                    </NavLink>
                    <NavLink
                        to='/artist'
                    >
                        Artist
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