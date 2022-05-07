import axios from 'axios';

const requestAuth = () => {
    return axios.post('http://localhost:4000/api/spotify/request_auth');
};

const getToken = (code) => {
    return axios.post('http://localhost:4000/api/spotify/get_token', {code});
}

const getUserSpotifyProfile = () => {
    return axios.post('http://localhost:4000/api/spotify/get_user_spotify_profile');
}

export {
    requestAuth,
    getToken,
}
