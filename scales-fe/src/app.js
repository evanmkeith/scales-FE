import { Routes, Route } from 'react-router-dom';
import { useState, useMemo } from 'react';
import React, { UserContext } from './UserContext';
import Landing from './pages/Landing';
import Profile from './pages/Profile'; 
import Artist from './pages/Artist'; 
import Listen from './pages/Listen'; 
import Playlist from './pages/Playlist'; 
import Search from './pages/Search'; 
import TourInfo from './pages/TourInfo'; 
import Navbar from './components/Navbar'; 

function App() {
    const [ user, setUser ] = useState();
    const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

    return (
        <>
            <Navbar user={user} setUser={setUser}/>
            <UserContext.Provider value={providerValue} >
                <Routes>
                    <Route
                        path="/"
                        element={<Landing />}
                    ></Route>
                    <Route
                        path="/profile"
                        element={<Profile />}
                    ></Route>
                    <Route
                        path="/artist"
                        element={<Artist />}
                    ></Route>
                    <Route
                        path="/listen"
                        element={<Listen />}
                    ></Route>
                    <Route
                        path="/playlist"
                        element={<Playlist />}
                    ></Route>
                    <Route
                        path="/search"
                        element={<Search />}
                    ></Route>
                    <Route 
                        path="/touring_info"
                        element={<TourInfo />}
                    ></Route>   
                </Routes>
            </UserContext.Provider>
        </>
    );
}

export default App;