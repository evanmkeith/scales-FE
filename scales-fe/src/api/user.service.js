import axios from 'axios';

const getUserInfo = (id) => {
    return axios.post('http://localhost:4000/api/user/info', {id});
}

const editProfile = (id, body) => {
    return axios.post('http://localhost:4000/api/user/edit', {id, body});
}

const addArtist = (id, artist) => {
    return axios.post('http://localhost:4000/api/user/add_artist', {id, artist});
}

const destroyProfile = (id) => {
    return axios.post('http://localhost:4000/api/user/destroy', {id});
}   

export {
    getUserInfo, 
    editProfile, 
    addArtist, 
    destroyProfile
}