import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';
function App() {
  return (
    <div style={{ margin: "50px" }}>
      <BrowserRouter>
            <Routes>
	            <Route element={<Main/>} path="/home" default /> //adding the default makes this the default path
              <Route element={<Detail/>} path="/people/:id" />    /* The :id part of our path is a variable that we 
            must give value to. */
            </Routes>
      </BrowserRouter>
        </div>
  );
}
export default App;