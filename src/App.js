import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/about/index';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <About />
      </div>
    </Router>
  );
}

export default App;
