import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AllCategory from './components/pages/CategoryPage/AllCategory';
import Women from './components/pages/CategoryPage/Women';
import Men from './components/pages/CategoryPage/Men';
import Kids from './components/pages/CategoryPage/Kids';

class App extends React.Component {
  render() {
    return(
      <div className='App'>
        <Routes>
          <Route path='/react_scandiweb' element={<Layout />}>
            <Route index element={<AllCategory />}/>
            <Route path='women' element={<Women />}/>
            <Route path='men' element={<Men />}/>
            <Route path='kids' element={<Kids />}/>
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
