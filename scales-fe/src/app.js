import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Profile from './pages/Profile'; 
import Artist from './pages/Artist'; 
import Listen from './pages/Listen'; 
import Playlist from './pages/Playlist'; 
import Search from './pages/Search'; 
import TourInfo from './pages/TourInfo'; 

function App() {

  return (
    <>
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
    </>
  );
}

export default App;