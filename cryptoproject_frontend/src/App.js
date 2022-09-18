// Components/Style/Routes import
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import { Routes, Route, Router } from 'react-router-dom'
import MarketPage from './components/marketpage';
import Markets from './pages/Markets';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/markets' element={<Markets />}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
