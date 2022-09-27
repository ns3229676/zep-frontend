import logo from './logo.svg';
import './App.css';
import Tasks from './Tasks'
import { Router, Routes, Route, useLocation } from 'react-router-dom';
import Admin from './Admin'
import { Fragment,useEffect} from 'react';


function App() {
  return (
    <div className="App">


    
   
    <Tasks/>
   

    </div>
  );
}

export default App;
