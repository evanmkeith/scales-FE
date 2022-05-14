import { useLocation } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import * as ticektMaster from '../../api/ticektMaster.service';

export default function TourInfo() {
    const location = useLocation();
    const keyWords = location.state.keyWords;

    console.log('KeyWords: ',keyWords);


    useEffect(() => {

    }, [])

    return (
        <>
            <h1>TourInfo</h1>
        </>
    )
}