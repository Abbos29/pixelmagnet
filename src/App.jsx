import './Reset.css'
import './App.scss';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';


const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

      </Routes>

      <Footer />
    </>

  );
};

export default App;