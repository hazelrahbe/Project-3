// Components import
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom";


// styles import
import './App.css';


//import pages
import Homepage from "./pages/Homepage";
import Markets from "./pages/Markets";
import Trade from "./pages/Trade";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Aboutus from "./pages/Aboutus";


function App() {
  // const URL = "http://localhost:3000/";
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Nav />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/markets" element={<Markets URL={URL} />} />
        <Route path="/trade" element={<Trade URL={URL} />} />
        <Route path="/privacy" element={<PrivacyPolicy URL={URL} />} />
        <Route path="/aboutus" element={<Aboutus URL={URL} />} />
      </Routes>
      <Footer /> 
      </header> 

    </div>
  );
}

export default App;
