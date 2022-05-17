import axios from 'axios';

//const url = 'https://scales-music.herokuapp.com/'

const url = 'http://localhost:4000/';

const getTourInfo = (keyWords) => {
    return axios.post(`${url}api/ticketmaster/events`, {keyWords});
}

export {
    getTourInfo
}