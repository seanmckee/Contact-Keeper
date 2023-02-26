
import NavBar from './components/layout/NavBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'

import ContactState from './context/contact/ContactState';
import './App.css';

const App= () => {
  return (
    <ContactState>
      <Router>
      <>
        <NavBar title="Contact Keeper" icon="fas fa-id-card-alt"/>
        <div className="container">
          <Routes >
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
          </Routes>
           
          
        </div>
      </>
    </Router>
    </ContactState>
    
    
  );
}

export default App;
