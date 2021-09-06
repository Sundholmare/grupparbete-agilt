import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/index';
import NavbarEN from './components/Navbar/indexEN';
import AboutEN from './components/about/index';
import AboutSV from './components/about/indexSV';
import HeroEN from './components/Hero/index';
import HeroSV from './components/Hero/indexSV';
import OfferEN from './components/Offer/index';
import OfferSV from './components/Offer/indexSV';
import QuotationEN from './components/Quotation/index'
import QuotationSV from './components/Quotation/indexSV'

import Footer from './components/Footer';
import Faq from './components/Faq';
import Contact from './components/Contact/index';
import ContactEN from './components/Contact/indexEn';
import { useSelector } from 'react-redux';

function App() {
  const language = useSelector((state) => state);

  return (
    <Router>
      <div className="App">
        <div className="main-wrapper">
          <Route path="/*">{language ? <NavbarEN /> : <Navbar />}</Route>
          <Switch>
            <Route exact path="/">
              {language ? <HeroEN /> : <HeroSV />}
              {language ? <OfferEN /> : <OfferSV />}
              {language ? <QuotationEN /> : <QuotationSV />}
            </Route>
            <Route path="/about">{language ? <AboutEN /> : <AboutSV />}</Route>
            <Route path="/faq">
              <Faq />
            </Route>
            <Route path="/contact">
              {language ? <ContactEN /> : <Contact />}
            </Route>
            <Faq />
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
