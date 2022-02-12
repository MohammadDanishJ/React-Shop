import React from 'react';
import Container from '../../components/container/container.component';
import tabTitle from "../page";
import { useAuth } from '../../context/authContext';
import '../index.styles.scss';
import './index.styles.scss';
import { useNavigate, Link } from 'react-router-dom';
import './index.styles.scss';
import { accountSettings } from '../../data';

function Profile() {
  tabTitle(document.location.pathname);

  const { isUser, currentUser, logout } = useAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    logout();
    navigate('/login')
  }

  const IMG = (imgName) => {
    return require(`../../assets/icons/${imgName}`);
  }

  return (
    <Container>
      {isUser ? (
        <>
          <div className="fl fl-d-cl fl-c shop-container user-card">
            <img className="img" src={IMG('profile-bg.svg')} alt={`${currentUser.displayName || currentUser.email}'s profile`} />
            <h1 className='title'><strong>{currentUser.displayName || currentUser.email}</strong></h1>
          </div>
          <div className="fl fl-d-cl shop-container">
            {/* <h1 className="title">Account Settings</h1> */}
            <div className="menu">
              {accountSettings.map((item, index) => {
                return (
                  <Link key={index} to={item.path}>
                    <div className="card fl fl-j-fs w100">
                      <div className="fl img fl-c">
                        <img className="img" src={IMG(item.icon)} alt={item.title} />
                      </div>
                      <div className="fl fl-d-cl fl-c fl-a-fs title lhinit w100">
                        <div className="title">{item.title}</div>
                        <div className="sub-title rate-title">{item.subTitle}</div>
                      </div>

                      <div className="controller fl fl-c cp">
                        <svg viewBox="0 0 19 20" width="19" height="20">
                          <path fill="currentColor"
                            d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z"></path>
                        </svg>
                      </div>
                    </div>
                  </Link>
                )
              })}

              {/* Logout Button */}
              <div onClick={handleSubmit} className="card fl fl-j-fs w100 log-out">
                <div className="fl img fl-c">
                  <img className="img" src={IMG(`logout-bg.svg`)} alt="shop banner" />
                </div>
                <div className="fl fl-d-cl fl-c fl-a-fs title lhinit w100">
                  <div className="title">Log Out</div>
                </div>

                <div className="controller fl fl-c cp">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <path fill="currentColor"
                      d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        // If Not logged In
        <>
          <div className='fl fl-c fl-d-cl p12 w100 h100vh'><div>You're not logged In</div><div><Link to='/login'>log In</Link> to see your <strong>Profile</strong></div></div>
        </>
      )}
    </Container>
  );
}

export default Profile;
