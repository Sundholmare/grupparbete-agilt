import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/about/index';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <div className="main-wrapper"> 
        <div className="App">
          <Navbar />
          <Hero />
        </div>
      </div>
    </Router>
  );
}

export default App;
