import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from './components/Home';
import './App.css';
import Profile from './components/Profile Page/Profile';

function App() {
  return (
    <div className='container'>
      <Router>
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/:username" exact element={<Profile />}/>
              </Routes>
            </Router>
    </div>
  )
}

export default App
