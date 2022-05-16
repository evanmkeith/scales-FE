export default function PlaylistTrack({ album, viewAlbum }) {

    function handleView() { 
        viewAlbum(album);
    }

    return (
        <>
            <div
                class='search-result'
                onClick={handleView}
            > 
                <img src={album.img.url} /> 
                <div>
                    <p>{album.name}</p>
                    <pre>By: {album.artist[0].name}</pre>
                </div>
            </div> 
        </>
    )   
};