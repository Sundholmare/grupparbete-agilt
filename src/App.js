import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutEN from './components/about/index';
import AboutSV from './components/about/indexSV';
import Hero from './components/Hero';
import Offer from './components/Offer';
import Footer from './components/Footer';
import Faq from './components/Faq'
import { useState } from 'react';

function App() {

  const [language, setLanguage] = useState(true);


  return (
    <Router>
      <div className="App">
        <div className="main-wrapper">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Hero />
              <Offer />
            </Route>
            <Route path="/about">
              {language ? <AboutEN /> : <AboutSV />}
            </Route>
            <Route path="/faq">
              <Faq />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
