import * as spotifyAuthService from '../../api/spotify.auth';
import React, { useEffect, useContext } from 'react';



export default function Login() {


    const requestAuth = async() => {
        await spotifyAuthService.requestAuth().then((res) => {
          window.location.href = res.data.authUrl;
        })
      }
    
      const getToken = async(authCode) => {
        window.history.pushState("", "", 'http://localhost:3000/profile');
    
        await spotifyAuthService.getToken(authCode).then((res) => {
          console.log("authCode received", res);

        })
      }
    
      useEffect(() => {
        if(window.location.href.includes('code')){
          const authCode = window.location.href.split('=')[1];
          getToken(authCode);
        };
      }, [])
    
      return (
        <div id='login'>
           <button onClick={requestAuth}>Login with Spotify</button>
        </div>
      );

}
