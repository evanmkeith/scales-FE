import * as ticketmaster from '../../api/ticektMaster.service';

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