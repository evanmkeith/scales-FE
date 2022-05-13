

export default function PlaylistTrack({ track, playTrack, removeTrack }) {

    function handlePlay() { 
        playTrack(track);
    }

    function remove() { 
        removeTrack(track);
    }

    return (
        <>
        <div
            style={ {cursor: "pointer"} }
            onClick={handlePlay}
        > 
            <img src={track.albumUrl} /> 
            <div>
                <div>{track.title}</div>
                <div>{track.artist}</div>
            </div>

        </div>
        <div onClick={remove}> 
            Remove
        </div>
        </>
    )

};