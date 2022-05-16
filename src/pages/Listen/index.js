import Player from '../../components/Player';
import { useLocation } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import * as spotifyAuthService from '../../api/spotify.auth';
import { UserContext } from '../../UserContext';
import AlbumTrack from '../../components/AlbumTrack';
import AddArtist from '../../components/AddArtist';

export default function Listen() {
    const location = useLocation();
    const [ tracks, setTracks ] = useState([]);
    const { user, setUser } = useContext(UserContext);
    const [ trackToPlay, setTrackToPlay ] = useState();
    const album = location.state.album;

    const playTrack = (track) => {
        setTrackToPlay(track);
    };

    const addTrack = async(track) => {
        await spotifyAuthService.addTrack(track, user).then(
            (res) => {
                console.log(res)
            }
        ).catch((error) => {
            console.log(error);
        })
    }

    const getTracks = async() => {
        await spotifyAuthService.getTracks(album.id, user.accessToken).then((res) => {
            setTracks( res.data.albumTracks);
        }).catch((err) => {
            console.log(err);
        });
    }

    console.log('TRACKS', tracks);

    useEffect(() => {
        getTracks();
    }, []);

    return (
        <>
            <div id='listen-div'>
                <div id='listen-album'> 
                    <img src={album.img.url} /> 
                    <p>{album.name}</p>
                    <p>by: {album.artist[0].name}</p>
                    <AddArtist id={user.userId} artist={album.artist[0].name}/>
                </div>
                <div id='listen-tracks'>
                        {tracks.map((track) => {
                            return (
                                <AlbumTrack 
                                    key={track.uri} 
                                    track={track} 
                                    addTrack={addTrack} 
                                    playTrack={playTrack}
                                /> 
                            )
                        })}
                </div>
                <div id='listen-player'>
                    <Player accessToken={user.accessToken} trackUri={trackToPlay?.uri}/>
                </div>
            </div>
        </>
    )
}