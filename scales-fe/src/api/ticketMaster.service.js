import axios from 'axios';

const url = 'https://scales-music.herokuapp.com/'

//local http://localhost:3000/

const getTourInfo = (keyWords) => {
    return axios.post(`${url}api/ticketmaster/events`, {keyWords});
}

export {
    getTourInfo
}