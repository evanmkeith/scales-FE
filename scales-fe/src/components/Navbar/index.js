import { NavLink } from 'react-router-dom'; 

export default function NavBar() {

    return(
        <>
            <div> 
                <NavLink
                    to='/profile'
                >
                </NavLink>
                <NavLink
                    to='/search'
                >
                </NavLink>
                <NavLink
                    to='/playlist'
                >
                </NavLink>
                <NavLink
                    to='/touring_info'
                >
                </NavLink>
                <NavLink
                    to='/listen'
                >
                </NavLink>
                <NavLink
                    to='/artist'
                >
                </NavLink>
            </div>
        </>
    )
}