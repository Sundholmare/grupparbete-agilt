import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/about/index';
import Hero from './components/Hero';
<<<<<<< HEAD
import Offer from './components/Offer';
=======
import Footer from './components/Footer'
>>>>>>> 481d240f8f83d52294741f34175e0c0d6603baba

function App() {
  return (
    <Router>
      <div className="main-wrapper"> 
        <div className="App">
          <Navbar />
          <Hero />
<<<<<<< HEAD
          <Offer />
=======
          <Footer />
>>>>>>> 481d240f8f83d52294741f34175e0c0d6603baba
        </div>
      </div>
    </Router>
  );
}

export default App;
