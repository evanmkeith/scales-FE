export default function PlaylistTrack({ album, viewAlbum }) {

    function handleView() { 
        viewAlbum(album);
    }

    return (
        <>
            <div
                onClick={handleView}
            > 
                <img src={album.img.url} /> 
                <div>
                    <div>{album.name}</div>
                    <div>{album.artist[0].name}</div>
                </div>
            </div> 
        </>
    )   
};