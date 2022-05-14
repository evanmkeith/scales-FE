import React, { useContext, useEffect, useState } from 'react';
import * as spotifyAuthService from '../../api/spotify.auth';
import { UserContext } from '../../UserContext';
import Player from '../../components/Player';
import PlaylistTrack from '../../components/PlaylistTrack';
import AddArtist from '../../components/AddArtist';

export default function Playlist() {
    const { user, setUser } = useContext(UserContext);
    const [ tracks, setTracks ] = useState([]);
    const [ trackToPlay, setTrackToPlay ] = useState()

    const playTrack = (track) => {
        setTrackToPlay(track);
    };

    const removeTrack = async(track) => {
        let removed = tracks.splice(tracks.indexOf(track), 1);

        await spotifyAuthService.removeTrack(track, user).then(
            (res) => {
                console.log(res)
                getPlaylist();
            }
        ).catch((error) => {
            console.log(error);
        })
    }

    const createSpotifyPlaylist = async() => {
        await spotifyAuthService.createSpotifyPlaylist(user).then(
            (res) => {
                console.log(res);
            }
        ).catch((error) => {
            console.log(error);
        })
    };

    const getPlaylist = async() => {
        await spotifyAuthService.getPlaylist(user).then(
            (res) => {
                const tracks = res.data.newTracks;
                console.log("tracks: ", tracks);
                setTracks(tracks);
                return tracks
            }
        ).catch((error) => {
            console.log(error);
        })
    };

    useEffect(() => {
        if(!user.playlistId){
            createSpotifyPlaylist();
            getPlaylist();
        } else {
            getPlaylist();
        }
    }, []);

    return (
        <> 
            <h1>Playlist</h1>

            {tracks.map((track) => {
                return (
                    <div>
                        <PlaylistTrack 
                            track={track}
                            key={track.uri}
                            playTrack={playTrack}
                            removeTrack={removeTrack}
                        />
                        <AddArtist artist={track.artist} id={user.userId}/>
                    </div>
                )
            })}

            <div>
                <Player accessToken={user.accessToken} trackUri={trackToPlay?.uri}/> 
            </div>
        </>
    );
};