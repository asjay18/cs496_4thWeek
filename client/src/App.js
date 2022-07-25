import React from 'react';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';

import Home from './Pages/HomePage/Home';
import LikedPage from './Pages/LikedPage';
import MadePage from './Pages/MadePage';
import NavBar from './NavBar';
import Login from './Pages/Auth/Login'
import Enroll from './Pages/Auth/Enroll';

import PeopleQuiz from "./Pages/HomePage/PeopleQuiz";
import SongQuiz from "./Pages/HomePage/SongQuiz";
import Jurumarble from "./Pages/HomePage/Jurumarble"
import FourWordQuiz from './Pages/HomePage/FourWordQuiz';

import MakeQuiz from './Pages/MakeQuiz';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='mainContainer'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/likedPage' element={<LikedPage/>} />
          <Route path='/madePage' element={<MadePage/>} />
          <Route path='/make' element={<MakeQuiz/>}/>
          <Route path='/peopleQuiz' element={<PeopleQuiz/>} />
          <Route path='/songQuiz' element={<SongQuiz/>} />
          <Route path='/jurumarble' element={<Jurumarble/>} />
          <Route path='/fourWordQuiz' element={<FourWordQuiz/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/enroll' element={<Enroll/>}/>
        </Routes>
      </div>      
    </div>
  )
}

export default App;
