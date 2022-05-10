import { NavLink } from 'react-router-dom'; 
import React from 'react'; 

export default function NavBar(props) {
    const user = props.user; 
    console.log("navBar",user);

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
                <h4>No user</h4>
            </>
        )
    }
    
}