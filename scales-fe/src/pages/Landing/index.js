import Login from '../../components/Login'; 
import { UserContext } from '../../UserContext';
import React, { useContext } from 'react';

function Landing() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
       <Login user={user} setUser={setUser}/>
    </div>
  );
}

export default Landing;
