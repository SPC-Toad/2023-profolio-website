import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Personal from './component/Personal/Personal';

function App() {
  return (
   <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={ < Home /> } />
        <Route path='/about' element={ < About /> } />
        <Route path='/contact' element={ < Contact /> } />
        <Route path='/personal' element={ < Personal /> } />
      </Routes>
    </Router>
   </>
  );
}

export default App;
