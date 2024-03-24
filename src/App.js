
import './App.css';
import Home from './Home';
import About from './About';
import Header from './Header';
import Explore from './Explore'
import Sidebar from './components/sidebar/Sidebar';
import VideoPlayer from './VideoPlayer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div className='app_mainpage'>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<><Header/><div><Sidebar></Sidebar><Explore/></div></>} />

          
          <Route path='/video/:videoId' element={
            <>
              <Header />
              <div className="app__mainpage">
                <Sidebar />
                <VideoPlayer />
              </div>
            </>
          } />
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
