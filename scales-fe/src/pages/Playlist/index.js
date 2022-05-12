import React, { useContext } from 'react';
import * as spotifyAuthService from '../../api/spotify.auth';
import { UserContext } from '../../UserContext';

export default function Playlist() {
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
            <h1>Playlist</h1>
            <button onClick={createSpotifyPlaylist}>Create Playlist</button>
        </>
    )
}