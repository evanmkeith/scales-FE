import { useLocation } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import * as ticketMasterService from '../../api/ticketMaster.service';

export default function TourInfo() {
    const location = useLocation();
    const keyWords = location.state.keyWords;
    const [ events, setEvents ] = useState([]);

    const getTourDates = async() => {
        await ticketMasterService.getTourInfo(keyWords).then((res) => {
            setEvents(res.data.events);
        }).catch((err) => {
            console.error(err);
        });
    };

    console.log(events);

    useEffect(() => {
        getTourDates();
    }, []);

    return (
        <>
            <h1>Tour Dates for {keyWords}</h1>
            <div>
                {events.map((event) => {
                    return (
                        <div>
                            <img src={event.images[5].url}/>
                            <div>
                                <a href={event.url} target="_blank">{event.name}</a>
                                <p>Location: {event._embedded.venues[0].city.name} ({event.dates.timezone})</p>
                                <p>Date: {event.dates.start.localDate}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    )
}