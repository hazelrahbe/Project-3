import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Nav />
        <Main />
      </header>
        <Footer />
    </div>
  );
}

export default App;
