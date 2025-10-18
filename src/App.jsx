

import './App.css';
import React from 'react'
import LandingPage from './stores/pages/LandingPage';
import {Routes,Route} from 'react-router-dom'
import MobilePage from './stores/pages/MobilePage';
import AcPage from './stores/pages/AcPage';
import BookPage from './stores/pages/BookPage';
import ComputerPage from './stores/pages/ComputerPage';
import FridgePage from './stores/pages/FridgePage';
import FurniturePage from './stores/pages/FurniturePage';
import MenPage from './stores/pages/MenPage';
import SpeakerPage from './stores/pages/SpeakerPage';
import TvPage from './stores/pages/TvPage';
import WatchPage from './stores/pages/WatchPage';
import WomenPage from './stores/pages/WomenPage';
import KitchenPage from './stores/pages/KitchenPage';
import MobileSingle from './singles/MobileSingle';
import UserCart from './stores/UserCart';
import AcSingle from './singles/AcSingle';
import BookSingle from './singles/BookSingle';
import ComputerSingles from './singles/ComputerSingles';
import FridgeSingle from './singles/FridgeSingle';
import WatchSingles from './singles/WatchSingles';
import MenSingle from './singles/MenSingle';
import WomenSingles from './singles/WomenSingles';
import FurnitureSingles from './singles/FurnitureSingles';
import KitchenSingles from './singles/KitchenSingles';


const App = () => {
  return (
    <div>
      <Routes>

        <Route path='/' element={ <LandingPage/>}/>
        <Route path='/kitchen' element={<KitchenPage/>}/>
        <Route path='/mobile' element={<MobilePage/>}/>
        <Route path='/ac' element={<AcPage/>}/>
        <Route path='/book' element={<BookPage/>}/>
        <Route path='/computer' element={<ComputerPage/>}/>
        <Route path='/fridge' element={<FridgePage/>}/>
        <Route path='/furniture' element={<FurniturePage/>}/>
        <Route path='/men' element={<MenPage/>}/>
        <Route path='/speaker' element={<SpeakerPage/>}/>
        <Route path='/tv' element={<TvPage/>}/>
        <Route path='/watch' element={<WatchPage/>}/>
        <Route path='women' element={<WomenPage/>}/>
        <Route path='/mobile/:id' element={<MobileSingle/>}/>

        <Route path='/cart' element={<UserCart/>}/>
        <Route path='/ac/:id' element={<AcSingle/>}/>
        <Route path='/books/:id'  element={<BookSingle/>}/>
        <Route path='/computer/:id' element={<ComputerSingles/>}/>
        <Route path='/fridge/:id' element={<FridgeSingle/>}/>
        <Route path='/watch/:id' element={<WatchSingles/>}/>
        <Route path='/men/:id' element={<MenSingle/>}/>
        <Route path='/women/:id' element={<WomenSingles/>}/>
        <Route path='/furniture/:id' element={<FurnitureSingles/>}/>
        <Route path='/kitchen/:id' element={<KitchenSingles/>}/>
      </Routes>
    
    </div>
  )
}

export default App
