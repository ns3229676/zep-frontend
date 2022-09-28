import logo from './logo.svg';
import './App.css';
import Tasks from './Tasks'
import { Router, Routes, Route, useLocation } from 'react-router-dom';
import Admin from './Admin'
import { Fragment,useEffect} from 'react';


function App() {
  return (
    <div className="App">


    
    <Routes>
    <Route  path="/" element={ <Fragment><Tasks/> </Fragment>} />
    <Route  path="/admin" element={ <Fragment> <Admin/> </Fragment>} />
   
    
    </Routes>
     
   
   

    </div>
  );
}

export default App;
