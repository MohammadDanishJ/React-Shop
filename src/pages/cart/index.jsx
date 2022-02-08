import React from 'react';
import Container from '../../components/container/container.component';
import tabTitle from '../page';
import { useAuth } from '../../context/authContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    tabTitle(document.location.pathname);
    const { isUser, currentUser } = useAuth();
    return (
        <Container>
      {isUser ? (
        <>
          <div>Cart is empty for {currentUser.displayName}</div>
        </>
      ) : (
        <>
          <div className='fl fl-c fl-d-cl p12 w100 h100vh'><div>You're not logged In</div><div><Link to='/login'>log In</Link> to see your <strong>Cart</strong></div></div>
        </>
      )}
    </Container>
    );
};

export default Cart;
