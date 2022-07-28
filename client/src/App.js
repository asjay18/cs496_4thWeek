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
import ChosungQuiz from './Pages/HomePage/ChosungQuiz';

import Quiz from './Pages/HomePage/Quiz';
import MakeQuiz from './Pages/MakeForm/MakeQuiz';
import MakeFourWordQuiz from './Pages/MakeForm/MakeFourWordQuiz';
import NoneSenseQuiz from './Pages/HomePage/NoneSenseQuiz';
import QuoteQuiz from './Pages/HomePage/QuoteQuiz';
import SokdamQuiz from './Pages/HomePage/SokdamQuiz';
import ImageQuiz from './Pages/HomePage/ImageQuiz';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='mainContainer'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/likedPage' element={<LikedPage/>} />

          <Route path='/madePage' element={<MadePage/>} />
          <Route path='/make' element={<MakeQuiz/>} />
          <Route path='/make/:type' element={<MakeFourWordQuiz/>} />
          
          <Route path='/peopleQuiz' element={<PeopleQuiz/>} />
          <Route path='/sokdamQuiz' element={<SokdamQuiz/>} />
          <Route path='/songQuiz' element={<SongQuiz/>} />
          <Route path='/chosungQuiz' element={<ChosungQuiz/>} />
          <Route path='/jurumarble' element={<Jurumarble/>} />
          <Route path='/fourWordQuiz' element={<FourWordQuiz/>}/>
          <Route path='/noneSenseQuiz' element={<NoneSenseQuiz/>}/>
          <Route path='/quoteQuiz' element={<QuoteQuiz/>}/>
          <Route path='/quoteQuiz' element={<QuoteQuiz/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/enroll' element={<Enroll/>} />
          <Route path='/quiz/:id' element={<Quiz/>} />
          <Route path='/imageQuiz/:id' element={<ImageQuiz/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
