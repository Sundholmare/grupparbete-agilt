import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/about/index';
import Hero from './components/Hero';
import Offer from './components/Offer';
import Footer from './components/Footer';
import Faq from './components/Faq'

function App() {
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
              <About />
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
