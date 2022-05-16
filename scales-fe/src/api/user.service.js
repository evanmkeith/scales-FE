import axios from 'axios';

//const url = 'https://scales-music.herokuapp.com/';

const url = 'http://localhost:4000/';

const getUserInfo = (id) => {
    return axios.post(`${url}api/user/info`, {id});
}

const editProfile = (id, body) => {
    return axios.post(`${url}api/user/edit`, {id, body});
}

const addArtist = (id, artist) => {
    return axios.post(`${url}api/user/add_artist`, {id, artist});
}

const removeArtist = (id, artistId) => {
    return axios.post(`${url}api/user/remove_artist`, {id, artistId});
}

const destroyProfile = (id) => {
    return axios.post(`${url}api/user/destroy`, {id});
}   

export {
    getUserInfo, 
    editProfile, 
    addArtist, 
    destroyProfile,
    removeArtist
}