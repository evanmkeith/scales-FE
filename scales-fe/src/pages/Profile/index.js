import React, { useState, useEffect, useContext } from 'react';
import * as userService from '../../api/user.service';
import { UserContext } from '../../UserContext';

export default function Profile() {
    const { user, setUser } = useContext(UserContext);
    const [ userProfile, setUserProfile ] = useState({});

    const getUser = async() => {
        const id = user.userId;
        await userService.getUserInfo(id).then((res) => {
            console.log(res.data.user)
            setUserProfile(res.data.user);
        })
    }

    useEffect(() => {
        getUser()
    }, []);

    return (
        <>
            <h1>Profile</h1>
            <div> 
                {!userProfile.img  ? (<img src={userProfile.img} />) : (<img src="https://picsum.photos/200/200?grayscale" />)} 
            </div> 
            <p>{userProfile.name}</p>
            <p>Artists I want to see live</p>
            <p>{userProfile.artists}</p>
        </> 
    )
}