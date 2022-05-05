import * as spotifyAuthService from '../api/spotify.auth';
import React, { useEffect } from 'react';

function App() {
  let authCode 

  const requestAuth = async() => {
    await spotifyAuthService.requestAuth().then((res) => {
      window.location.href = res.data.authUrl;
    })
  }

  const getToken = async() => {
    window.history.pushState("", "", 'http://localhost:3000/');

    await spotifyAuthService.getToken(authCode).then((res) => {
      console.log(authCode);
    })
  }

  useEffect(() => {
    if(window.location.href.includes('code')){
      authCode = window.location.href.split('=')[1];
      getToken();
    };
  }, [])
  

  return (
    <div>
       <button onClick={requestAuth}>Login with Spotify</button>
    </div>
  );
}

export default App;
