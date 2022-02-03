import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import Navbar from './components/navbar/navbar.component';
import Shop from './pages/shop';
import Cart from './pages/cart';
import Notifications from './pages/notifications';
import { useState } from 'react';
import { AuthProvider } from './context/authContext';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  // const [userInfo, setuserInfo] = useState([]);
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          {/* Fallback for default URL, Redirect to /home */}
          <Route exact path="/" element={<Navigate replace to="/home" />} />
          <Route path='/home' element={<Home isAuth={isAuth} setIsAuth={setIsAuth} />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:sname' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/notifications' element={<Notifications />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
