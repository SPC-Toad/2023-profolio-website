import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import About from './component/About/About'
import Contact from './component/Contact/Contact'

function App() {
  return (
   <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={ < Home /> } />
        <Route path='/about' element={ < About /> } />
        <Route path='/contact' element={ < Contact /> } />
      </Routes>
    </Router>
   </>
  );
}

export default App;
