import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as userService from '../../api/user.service';
import { UserContext } from '../../UserContext';

export default function Profile() {
    const { user, setUser } = useContext(UserContext);
    const [ userProfile, setUserProfile ] = useState({});
    const [ edit, setEdit ] = useState(false);
    const [ image, setImage ] = useState(); 
    const [ name, setName ] = useState();
    const navigate = useNavigate();

    const getUser = async() => {
        const id = user.userId;
        await userService.getUserInfo(id).then((res) => {
            console.log(res.data.user)
            setUserProfile(res.data.user);
        })
    }

    const editProfile = () => {
        setEdit(true);
    }

    const updateProfile = async(e) => {
        e.preventDefault();
        const id = user.userId;
        const body = {
            name: name,
            img: image
        }
        await userService.editProfile(id, body).then((res) => {
            setUserProfile(res.data.updatedUser)
            setEdit(false);
        })
    }

    const destroy = async(e) => {
        e.preventDefault();
        const id = user.userId;
        await userService.destroyProfile(id).then((res) => {
            console.log(res);
            setUser(undefined);
            navigate('/')
        })
    }

    useEffect(() => {
        getUser()
    }, []);

    if(!edit){
        return (
            <>
                <div> 
                    <img src={userProfile.img} />
                </div> 
                <p>{userProfile.name}</p>
                <p>Artists I want to see live</p>
                <p>{userProfile.artists}</p>
                <button onClick={editProfile}>Edit</button>
            </> 
        )
    } else {
        return (
            <>
                <form>
                    <label>
                        Image
                    <input onChange={e => setImage(e.target.value)} value={image} placeholder={userProfile.img}/>
                    </label>
                    <label>
                        Name
                    <input onChange={e => setName(e.target.value)} value={name} placeholder={userProfile.name}/>
                    </label>
                    <button onClick={updateProfile}>Submit</button>
                </form>
                <button onClick={destroy}>Destroy</button>
            </> 
        )
    }
}