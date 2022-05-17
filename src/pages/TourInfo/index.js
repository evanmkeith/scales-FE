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

    useEffect(() => {
        getTourDates();
    }, []);

    return (
        <>
            <h3>Tour Dates for {keyWords}</h3>
            <div>
                {events.map((event) => {
                    return (
                        <div className="event">
                            <img src={event.images[5].url}/>
                            <div className="event-info">
                                <a href={event.url} target="_blank">{event.name}</a>
                                <p>Where: {event._embedded.venues[0].city.name} ({event.dates.timezone})</p>
                                <p>When: {event.dates.start.localDate}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    )
}