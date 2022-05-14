import * as userService from '../../api/user.service';

export default function PlaylistTrack({ artist, id }) {
    async function handleAdd() { 
        await userService.addArtist(id, artist).then((res) => {
            console.log(res);
        }).catch((err) => {console.log(err);})
    }

    return (
        <>
            <button onClick={handleAdd}>Add</button>
        </>
    )   
};