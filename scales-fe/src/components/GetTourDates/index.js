
export default function GetTourDates({ getTourDates, keyWords}) {

    async function handleTours(e) { 
        e.preventDefault();
        getTourDates(keyWords);
    }

    return (
        <>
            <button onClick={handleTours}>
                check tour info
            </button>
        </>
    )   
};