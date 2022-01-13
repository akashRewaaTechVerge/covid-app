import './App.css';
import Contents from './component/Contents/Contents';
import Footer from './component/Footer/Footer';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './color.css';
import './responsive.css'
import './animate.css'
import ContactUs from './component/ContactUs/ContactUs';

function App() {
  return (
    <>
        <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Contents/>} />
      <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
