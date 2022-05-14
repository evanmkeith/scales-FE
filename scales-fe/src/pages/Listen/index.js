import Player from '../../components/Player';
import { useLocation } from 'react-router-dom';

export default function Listen() {
    const location = useLocation();

    console.log("Params ",location.state.album);

    return (
        <>
            <h1>Listen</h1>
            <div>
                
            </div>
        </>
    )
}