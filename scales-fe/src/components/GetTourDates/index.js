import * as ticketmaster from '../../api/ticketMaster.service';

export default function GetTourDates({ getTourDates, keyWords}) {

    async function handleTours(e) { 
        e.preventDefault();
        getTourDates(keyWords);
    }

    return (
        <>
            <button onClick={handleTours}>Check Tour Dates</button>
        </>
    )   
};