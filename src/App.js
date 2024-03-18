
import './App.css';
import Home from './Home';
import About from './About';
import Header from './Header';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='app_mainpage'>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Header/><div><Sidebar></Sidebar></div></>} />
          <Recom
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
