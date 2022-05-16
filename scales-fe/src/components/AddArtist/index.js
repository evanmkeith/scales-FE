import * as userService from '../../api/user.service';

export default function PlaylistTrack({ artist, id }) {
    async function handleAdd() { 
        await userService.addArtist(id, artist).then((res) => {
            console.log(res);
        }).catch((err) => {console.log(err);})
    }

    return (
        <>
            <div class="add-artist">
                <button onClick={handleAdd}>
                    <span class="material-symbols-outlined">
                        person_add
                    </span>
                </button>
            </div>
        </>
    )   
};