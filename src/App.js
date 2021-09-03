import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutEN from './components/about/index';
import AboutSV from './components/about/indexSV';
import Hero from './components/Hero';
import Offer from './components/Offer';
import Quotation from './components/Quotation'
import Footer from './components/Footer';
import Faq from './components/Faq';
import Contact from './components/Contact';
import { useSelector } from 'react-redux';

function App() {
  const language = useSelector((state) => state);

  return (
    <Router>
      <div className="App">
        <div className="main-wrapper">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Hero />
              <Offer />
              <Quotation />
            </Route>
            <Route path="/about">{language ? <AboutEN /> : <AboutSV />}</Route>
            <Route path="/faq">
              <Faq />
            </Route>
            <Contact path="/contact">
              <Faq />
            </Contact>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
