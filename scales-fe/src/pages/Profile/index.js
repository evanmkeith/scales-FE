import React, { useState, useEffect, useContext } from 'react';
import * as spotifyAuthService from '../../api/spotify.auth';
import { UserContext } from '../../UserContext';

export default function Profile() {
    const { user, setUser } = useContext(UserContext);

    const createSpotifyPlaylist = async() => {
        await spotifyAuthService.createSpotifyPlaylist(user.userId).then(
            (res) => {
                console.log("Sent ", user.userId);
                console.log(res);
            }
        )
    } 

    return (
        <>
            <h1>Profile</h1>
            <button onClick={createSpotifyPlaylist}>Create Playlist</button>
        </>
    )
}