import React, { useState, useEffect, useContext } from 'react';
import * as userService from '../../api/user.service';
import { UserContext } from '../../UserContext';

export default function Profile() {
    const { user, setUser } = useContext(UserContext);

    console.log("Profile Page user",user);

    // const getUser = async() => {
    //     const id = user.userId;
    //     await userService.getUserInfo(id).then((res) => {
    //         //console.log(res.data.user);
    //         setUser(res.data.user);
    //     })
    // }

    // useEffect(() => {
    //     getUser()
    // }, []);

    return (
        <>
            <h1>Profile</h1>
        </>
    )
}