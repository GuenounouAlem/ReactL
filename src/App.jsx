
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        {/* <Route path="/about" component={About} />
        <Route component={NotFound} /> */}
      </Routes>
    </Router>
  );
}

export default App;
