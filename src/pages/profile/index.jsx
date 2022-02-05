import React from 'react';
import Container from '../../components/container/container.component';
import tabTitle from "../page";
import { useAuth } from '../../context/authContext';
import '../index.styles.scss';
import './index.styles.scss';
import { useNavigate } from 'react-router-dom';

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
      <h1 className="w100 text-center">Profile</h1>
      {isUser ? (
        <>
          <div>User Found: {currentUser.displayName}</div>
          <button className='log-out' onClick={handleSubmit}>Log Out</button>
        </>
      ) : (
        <>
          <div>No USer Found</div>
        </>
      )}
    </Container>
  );
}

export default Profile;
