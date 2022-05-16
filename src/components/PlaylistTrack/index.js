

export default function PlaylistTrack({ track, playTrack, removeTrack }) {

    function handlePlay() { 
        playTrack(track);
    }

    function remove() { 
        removeTrack(track);
    }

    return (
        <>
            <div class='track'>
                <button class="remove-track" onClick={remove}> 
                    x
                </button>
                <div
                    class='track-div'
                    onClick={handlePlay}
                > 
                    <span class="track-info">
                        <img 
                            class='track-img' 
                            src={track.albumUrl} 
                        /> 
                        <span>
                            <p>{track.title}</p>
                            <pre>{track.artist}</pre>
                        </span>
                    </span>
                </div>
            </div>
        </>
    )
};