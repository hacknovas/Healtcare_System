import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeP from './components/HomeP';
import Appointment from './components/Appoinment';
import Contact from './components/Contact';
import Checker from './components/Checker';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeP />} />
          <Route path='/checker' element={<Checker />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/appointment' element={<Appointment />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );

}

export default App;
