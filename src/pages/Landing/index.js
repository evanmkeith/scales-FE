import Login from '../../components/Login'; 
import { UserContext } from '../../UserContext';
import React, { useContext } from 'react';
import logo from '../../styles/assets/scales-logos_black.png'

function Landing() {

  return (
    <div id='landing'>
      <div>
        <img src={logo}/>
        <span>A place to enjoy music by the album. <br/>Create a playlist from songs you like, that you can see on your Spotify account, <br/>and check to see if artists you admire are on tour.<br/><br/>Enjoy music, slowly.</span>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Landing;
