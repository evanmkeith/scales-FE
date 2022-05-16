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
        
        <div> 
            <div id="listen-track">
                <button onClick={add}> 
                    +
                </button>
                <h5>{track.title}</h5>
                <span 
                class="material-symbols-outlined"
                onClick={handlePlay}
                >
                    play_circle
                </span>
            </div>
        </div>
        </>
    )
};