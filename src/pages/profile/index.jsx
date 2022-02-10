import React from 'react';
import Container from '../../components/container/container.component';
import tabTitle from "../page";
import { useAuth } from '../../context/authContext';
import '../index.styles.scss';
import './index.styles.scss';
import { useNavigate, Link } from 'react-router-dom';

function Profile() {
  tabTitle(document.location.pathname);

  const { isUser, currentUser, logout } = useAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    logout();
    navigate('/login')
  }

  return (
    <Container>
      {isUser ? (
        <>
          <div>User Found: <strong>{currentUser.displayName || currentUser.email}</strong></div>
          <button className='log-out' onClick={handleSubmit}>Log Out</button>
        </>
      ) : (
        <>
          <div className='fl fl-c fl-d-cl p12 w100 h100vh'><div>You're not logged In</div><div><Link to='/login'>log In</Link> to see your <strong>Profile</strong></div></div>
        </>
      )}
    </Container>
  );
}

export default Profile;
