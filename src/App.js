import './App.css';
import Contents from './component/Contents/Contents';
import Footer from './component/Footer/Footer';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './color.css';
import './responsive.css'
import './animate.css'
import ContactUs from './component/ContactUs/ContactUs';
import WarrenAve from './component/WarrenAve/WarrenAve';
import MainStreet from './component/MainStreet/MainStreet';
import GoToTop from './component/GotoTop/GoToTop';

function App() {
  return (
    <>
        <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Contents/>} />
      <Route path="/contact" element={<ContactUs/>}/>
      <Route path="/warren_ave" element={<WarrenAve/>}/>
      <Route path="/main_street" element={<MainStreet/>}/>
      </Routes>
      <Footer/>
      <GoToTop />
      </Router>
    </>
  );
}

export default App;
