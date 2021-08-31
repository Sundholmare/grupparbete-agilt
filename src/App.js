import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/about/index';
import Hero from './components/Hero';
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="main-wrapper"> 
        <div className="App">
          <Navbar />
          <Hero />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
