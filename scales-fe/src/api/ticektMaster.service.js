import axios from 'axios';

const getTourInfo = (keyWords) => {
    return axios.post('http://localhost:4000/api/ticketmaster/events', {keyWords});
}

export {

}