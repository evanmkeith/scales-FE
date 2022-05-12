import React, { useContext } from 'react';
import * as spotifyAuthService from '../../api/spotify.auth';
import { UserContext } from '../../UserContext';
import Player from '../../components/Player';

export default function Playlist() {
    const { user, setUser } = useContext(UserContext);
    let accessToken;
    let tracks = [];

    const createSpotifyPlaylist = async() => {
        await spotifyAuthService.createSpotifyPlaylist(user.userId).then(
            (res) => {
                console.log(res);
            }
        )
    };

    const getPlaylist = async() => {
        console.log("get playlist ", user.userId)
        await spotifyAuthService.getPlaylist(user.userId).then(
            (res) => {
                console.log(res);
                res.data.tracks.map(track => {
                    tracks.push({
                        artist: track.track.artists[0].name,
                        title: track.track.name, 
                        uri: track.track.uri, 
                        albumUrl: track.track.album.images[2].url
                    });
                });
                accessToken = res.data.accessToken;
                console.log("tracks: ", tracks); 
                console.log("accessToken", accessToken);
            }
        )
    };

    return (
        <>
            <h1>Playlist</h1>
            <button onClick={createSpotifyPlaylist}>Create Playlist</button>
            <button onClick={getPlaylist}>Get Playlist</button>
            
            <div>
                <Player accessToken={accessToken} /> 
            </div>
        </>
    )
}