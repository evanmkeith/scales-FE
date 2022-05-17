import axios from 'axios';

//const url = 'https://scales-music.herokuapp.com/';

const url = 'http://localhost:4000/';

const requestAuth = () => {
    return axios.post(`${url}api/spotify/request_auth`);
};

const getToken = (code) => {
    return axios.post(`${url}api/spotify/get_token`, {code});
}

const createSpotifyPlaylist = (token) => {
    return axios.post(`${url}api/spotify/create_play_list`, {token});
}

const getPlaylist = (token) => {
    return axios.post(`${url}api/spotify/get_play_list`, {token});
}

const removeTrack = (track, user) => {
    return axios.post(`${url}api/spotify/remove_track`, {track, user});
}

const getSearch = (accessToken, search) => {
    return axios.post(`${url}api/spotify/search`, {accessToken, search});
}

const addTrack = (track, user) => {
    return axios.post(`${url}api/spotify/add_track`, {track, user})
}

const getTracks = (albumId, accessToken) => {
    return axios.post(`${url}api/spotify/get_album_tracks`, {albumId, accessToken})
}

export {
    requestAuth,
    getToken,
    createSpotifyPlaylist,
    getPlaylist,
    removeTrack,
    getSearch, 
    addTrack, 
    getTracks
}
