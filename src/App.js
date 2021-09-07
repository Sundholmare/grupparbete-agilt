import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutEN from './components/about/index';
import AboutSV from './components/about/indexSV';
import HeroEN from './components/Hero/index';
import HeroSV from './components/Hero/indexSV';
import OfferEN from './components/Offer/index';
import OfferSV from './components/Offer/indexSV';
import QuotationEN from './components/Quotation/index';
import QuotationSV from './components/Quotation/indexSV';
import ProductsEN from './components/Products/index';
import ProductsSV from './components/Products/indexSV';

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
              {language ? <HeroEN /> : <HeroSV />}
              {language ? <OfferEN /> : <OfferSV />}
              <ProductsEN />
              {language ? <QuotationEN /> : <QuotationSV />}
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
