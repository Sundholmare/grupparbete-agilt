import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/about/index';
import Hero from './components/Hero';
import Offer from './components/Offer';
import Quotation from './components/Quotation'
import Footer from './components/Footer'


function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <div className="App">
          <Navbar />
          <Hero />
          <Offer />
          <Quotation />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
