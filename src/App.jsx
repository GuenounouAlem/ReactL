
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import Todos from './Todos.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Todos />}/>
        {/* <Route path="/about" component={About} />
        <Route component={NotFound} /> */}
      </Routes>
    </Router>
  );
}

export default App;
