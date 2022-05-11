import * as spotifyAuthService from '../../api/spotify.auth';
import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login(props) {
    const navigate = useNavigate();

    const requestAuth = async() => {
        await spotifyAuthService.requestAuth().then((res) => {
            console.log('response: ',res);
            window.location.href = res.data.authUrl;
        })
      }
    
      const getToken = async(authCode) => {
        console.log("getting token")
       
        await spotifyAuthService.getToken(authCode).then((res) => {
            console.log("user id", res.data.token);
            props.setUser({"userId": res.data.token});
        })
        navigate('/profile');
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
