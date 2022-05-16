import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as userService from '../../api/user.service';
import { UserContext } from '../../UserContext';
import RemoveArtist from '../../components/RemoveArtist';
import GetTourDates from '../../components/GetTourDates';

export default function Profile() {
    const { user, setUser } = useContext(UserContext);
    const [ userProfile, setUserProfile ] = useState({
        artists: [], 
        img: "", 
        name: "",
    });
    const [ edit, setEdit ] = useState(false);
    const [ image, setImage ] = useState(); 
    const [ name, setName ] = useState();
    const navigate = useNavigate();

    const getUser = async() => {
        const id = user.userId;
        await userService.getUserInfo(id).then((res) => {
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
            setUser(undefined);
            navigate('/')
        })
    }

    const removeArtist = async(id, artistId, idx) => {
        await userService.removeArtist(id, artistId).then((res) => {
            getUser();
        }).catch((err) => {
            console.log(err);
        });
    }

    const getTourDates = (keyWords) => {
        navigate('/touring_info', {state: {keyWords}});
    }

    useEffect(() => {
        getUser()
    }, []);

    if(!edit){
        return (
            <>
                <div id="profile">
                    <div class="profile-img"> 
                        <img id="profile-img" src={userProfile.img} />
                    </div> 
                    <h3>Welcome, {userProfile.name}</h3>
                    <div id="artists-to-see-live">
                        <p>Artists I want to see live:</p>
                            <ul>
                                { userProfile.artists.length < 1 ? (<p>You haven't add any artists.</p>): userProfile.artists.map((artist, idx) => {
                                    return (
                                <li key={artist._id}>
                                    <pre>
                                    {artist.artist} 
                                    <span>
                                        <RemoveArtist artistId={artist._id} id={user.userId} idx={idx} removeArtist={removeArtist}/>
                                    </span> 
                                    </pre>
                                    <span>
                                        <GetTourDates keyWords={artist.artist} getTourDates={getTourDates} />
                                    </span>
                                </li>)
                                }) }
                            </ul>
                        </div>
                    <button onClick={editProfile} id="edit-profile">
                        edit profile
                    </button>
                </div>
            </> 
        )
    } else {
        return (
            <>
                <div id="edit-profile">
                    <form>
                        <label>
                            <span>Image</span>
                        </label>
                        <input onChange={e => setImage(e.target.value)} value={image} placeholder={userProfile.img}/>
                        
                        <label>
                            <span>Name</span>
                        </label>
                        <input onChange={e => setName(e.target.value)} value={name} placeholder={userProfile.name}/>
                    </form>
                    <div id='edit-profile-btns-div'>
                    <button 
                            onClick={destroy}
                        >
                            Delete Account
                        </button>
                        <button onClick={updateProfile}>
                            Submit
                        </button>
                    </div>
                </div>
            </> 
        )
    }
}