import React, { useEffect,  createContext, useState } from 'react';
import Login from '../../components/Login'; 
import { Routes } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {

  return (
    <>
        <Routes>
            <Route
                path="/"
                element={<Landing />}
            ></Route>
            <Route
                path="/"
                element={<Landing />}
            ></Route>
        </Routes>
    </>
  );
}

export default App;