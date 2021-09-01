import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutEN from './components/about/index';
import AboutSV from './components/about/indexSV';
import Hero from './components/Hero';
import Offer from './components/Offer';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const [language, setLanguage] = useState(true);


  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-wrapper">
          <Switch>
            <Route exact path="/">
              <Hero />
              <Offer />
              <Footer />
            </Route>
            <Route path="/about">
              {language ? <AboutEN /> : <AboutSV />}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
