import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as userService from '../../api/user.service';
import { UserContext } from '../../UserContext';
import RemoveArtist from '../../components/RemoveArtist';

export default function Profile() {
    const { user, setUser } = useContext(UserContext);
    const [ userProfile, setUserProfile ] = useState({});
    const [ edit, setEdit ] = useState(false);
    const [ image, setImage ] = useState(); 
    const [ name, setName ] = useState();
    const navigate = useNavigate();

    console.log(userProfile.artists);

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

    const removeArtist = async(id, artistId, idx) => {
        await userService.removeArtist(id, artistId).then((res) => {
            console.log(res);
            const removedArtist = userProfile.artists.splice(idx, 1);
        }).catch((err) => {
            console.log(err);
        });
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
                <div>
                    <p>Artists I want to see live</p>
                        <ul>
                            {!userProfile.artists ? (<p>You haven't added any artists that you want to see live</p>): userProfile.artists.map((artist, idx) => {
                                return (<li key={artist._id}>{artist.artist}<span><RemoveArtist artistId={artist._id} id={user.userId} idx={idx} removeArtist={removeArtist}/></span></li>)
                            }) }
                        </ul>
                    </div>
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