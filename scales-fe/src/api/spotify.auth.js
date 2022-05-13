import axios from 'axios';

const requestAuth = () => {
    return axios.post('http://localhost:4000/api/spotify/request_auth');
};

const getToken = (code) => {
    return axios.post('http://localhost:4000/api/spotify/get_token', {code});
}

const createSpotifyPlaylist = (token) => {
    return axios.post('http://localhost:4000/api/spotify/create_play_list', {token});
}

const getPlaylist = (token) => {
    return axios.post('http://localhost:4000/api/spotify/get_play_list', {token});
}

const removeTrack = (track, user) => {
    return axios.post('http://localhost:4000/api/spotify/remove_track', {track, user});
}

const getSearch = (accessToken, search) => {
    return axios.post('http://localhost:4000/api/spotify/search', {accessToken, search});
}

const addTrack = (track, user) => {
    return axios.post('http://localhost:4000/api/spotify/add_track', {track, user})
}

export {
    requestAuth,
    getToken,
    createSpotifyPlaylist,
    getPlaylist,
    removeTrack,
    getSearch, 
    addTrack
}
