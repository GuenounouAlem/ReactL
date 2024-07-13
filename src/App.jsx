
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import Register from './Register.jsx';
import Login from './Login.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />}/>
        {/* <Route path="/about" component={About} />
        <Route component={NotFound} /> */}
      </Routes>
    </Router>
  );
}

export default App;
