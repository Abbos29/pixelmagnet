import './Reset.css'
import './App.scss';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import ScrollToTop from './components/ui/ScrollToTop/ScrollToTop';
import Service from './pages/Service';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Article from './pages/Article';
import Details from './pages/Details';
import Touch from './pages/Touch';


const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/article' element={<Article />} />
        <Route path='/details' element={<Details />} />
        <Route path='/touch' element={<Touch />} />

      </Routes>

      <Footer />
    </>

  );
};

export default App;