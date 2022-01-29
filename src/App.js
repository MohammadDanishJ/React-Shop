import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import Navbar from './components/navbar/navbar.component';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
