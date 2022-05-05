import * as spotifyAuthService from '../api/spotify.auth';

function App() {
  const requestAuth = async(e) => {
    e.preventDefault();
    await spotifyAuthService.spotifyRequestAuth().then((res) => {
      window.location.href = res.data.authUrl;
    })
  }


  return (
    <div>
       <button onClick={requestAuth}>Login with Spotify</button>
    </div>
  );
}

export default App;
