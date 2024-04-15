import './App.css';
import About from './components/About/about';
import Home from './components/Home/home';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Week from './components/Week/week';
import Comment from './components/Comments/comments';
import Footer from './components/Footer/footer';
import Editor from './components/EditorPick/EditorP';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/week' element={<Week/>} />
        <Route path='/comment' element={<Comment />} />
        <Route path='/editor' element={<Editor />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;