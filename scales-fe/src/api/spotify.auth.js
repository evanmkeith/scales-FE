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


export {
    requestAuth,
    getToken,
    createSpotifyPlaylist,
}
