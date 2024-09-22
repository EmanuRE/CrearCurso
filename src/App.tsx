import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CrearCurso from './assets/Postapi'; // post
import Menu from './assets/Menu';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
  
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/crearcurso" element={<CrearCurso />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;