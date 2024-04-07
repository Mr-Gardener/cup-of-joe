import './App.css';
import About from './components/About/about';
import Home from './components/Home/home';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Week from './components/Week/week';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/week' element={<Week/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
