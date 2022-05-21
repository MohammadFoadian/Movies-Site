import React from 'react';

import {Routes , Route} from 'react-router-dom'

// commponents
import Movies from './Movies';
import DetailMovies from './components/DetailMovies';
import CoverPage from './CoverPage';




const App = () => {
    return (
        <div>
          
          <Routes>
            <Route path='/' element={<CoverPage />}></Route>
            <Route path='/Home' element={<Movies />}></Route>
            <Route path='/detail/:id' element={<DetailMovies />}>
            </Route>
          </Routes>
          
        </div>
    );
};

export default App;