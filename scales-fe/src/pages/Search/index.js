import React, { useState, useContext, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { UserContext } from '../../UserContext';
import * as spotifyAuthService from '../../api/spotify.auth';
import SearchResults from '../../components/SearchResult';

export default function Search() {
    const { user, setUser } = useContext(UserContext);
    const [ search, setSearch ] = useState();
    const [ albums, setAlbums ] = useState([]);
    const navigate = useNavigate();

    const handleSearchSubmit = async(e) => {
        e.preventDefault();
        const accessToken = user.accessToken;
        console.log(accessToken)
        await spotifyAuthService.getSearch(accessToken, search).then((res) => {
            setAlbums(res.data.albums);
        }).catch((err) => {console.log(err)})
    }
    console.log("albums: ",albums);

    const viewAlbum = (album) => {
        navigate('/listen', {state: {album}});
    }

    return (
        <>
            <h1>Search</h1>
            <form>
                <input type='text' name='search' placeholder='search' value={search} onChange={e => setSearch(e.target.value)}/> 
                <button onClick={handleSearchSubmit}>Search</button>
            </form>
            <div>
                {albums.map((album) => {
                    return (
                        <SearchResults album={album} key={album.id} viewAlbum={viewAlbum}/> 
                    )
                })}
            </div>
        </>
    )
}