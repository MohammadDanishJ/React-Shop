import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import Navbar from './components/navbar/navbar.component';
import Shop from './pages/shop';
import Cart from './pages/cart';
import Notifications from './pages/notifications';
import { AuthProvider } from './context/authContext';
import {default as LogIn, SignUp, ForgotPassword} from './pages/auth';

function App() {
  // const [userInfo, setuserInfo] = useState([]);
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          {/* Fallback for default URL, Redirect to /home */}
          <Route exact path="/" element={<Navigate replace to="/home" />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:sname' element={<Shop />} />
          <Route path='/cart/' element={<Cart />} />
          <Route path='/cart/:item' element={<Cart />} />
          <Route path='/notifications' element={<Notifications />} />

          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
