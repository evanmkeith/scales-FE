import axios from 'axios';

const getUserInfo = (id) => {
    return axios.post('http://localhost:4000/api/user/info', {id});
}


export {
    getUserInfo
}