import React, { useState, useContext } from 'react';
import { UserContext } from '../../UserContext';
import * as spotifyAuthService from '../../api/spotify.auth';

export default function Search() {
    const { user, setUser } = useContext(UserContext);
    const [ search, setSearch ] = useState();

    const handleSearchSubmit = async(e) => {
        e.preventDefault();
        const accessToken = user.accessToken;
        console.log(accessToken)
        await spotifyAuthService.getSearch(accessToken, search).then((res) => {
            console.log(res);
        }).catch((err) => {console.log(err)})
    }

    return (
        <>
            <h1>Search</h1>
            <form>
                <input type='text' name='search' placeholder='search' value={search} onChange={e => setSearch(e.target.value)}/> 
                <button onClick={handleSearchSubmit}>Search</button>
            </form>
        </>
    )
}