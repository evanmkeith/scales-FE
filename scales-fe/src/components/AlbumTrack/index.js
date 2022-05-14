export default function PlaylistTrack({ track, playTrack, addTrack }) {

    console.log("Track: ",track)

    function handlePlay() { 
        playTrack(track);
    }

    function add() { 
        addTrack(track);
    }

    return (
        <>
        <div
            onClick={handlePlay}
        > 
            <div>
                <h4>{track.title}</h4>
            </div>
        </div>
        <div onClick={add}> 
            Add
        </div>
        </>
    )
};