import axios from 'axios';

const spotifyRequestAuth = () => {
    return axios.post('http://localhost:4000/api/spotify/request_auth');
};

export {
    spotifyRequestAuth,
}