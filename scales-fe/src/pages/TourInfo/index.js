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
            <h1>TourInfo</h1>
        </>
    )
}