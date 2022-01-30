import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import Navbar from './components/navbar/navbar.component';
import Shop from './pages/shop';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Fallback for default URL, Redirect to /home */}
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:sname' element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
