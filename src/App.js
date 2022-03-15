import './App.css';
import Contents from './component/Contents/Contents';
import Footer from './component/Footer/Footer';
import Navbar from './component/Navbar/Navbar';
import WorkPlace from './component/WorkPlace/WorkPlace';
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
      <Route path="/SouthCarolina" element={<ContactUs/>}/>
      <Route path="/Illinois" element={<WarrenAve/>}/>
      <Route path="/Missouri" element={<MainStreet/>}/>
      <Route path="/WorkPlace" element={<WorkPlace/>}/>
      </Routes>
      <Footer/>
      <GoToTop />
      </Router>
    </>
  );
}

export default App;
