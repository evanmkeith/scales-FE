import * as userService from '../../api/user.service';

export default function PlaylistTrack({ artistId, id, idx, removeArtist}) {

    async function handleRemove() { 
        removeArtist(id, artistId, idx);
    }

    return (
        <>
            <button onClick={handleRemove} class='remove-artist'>
                x
            </button>
        </>
    )   
};