import React from 'react';
import Container from '../../components/container/container.component';
import tabTitle from '../page';
import { useAuth } from '../../context/authContext';
import { Link, NavLink, useParams } from 'react-router-dom';
import './index.styles.scss';

const Cart = () => {
  const { item } = useParams();
  tabTitle(document.location.pathname, item);
  const { isUser, currentUser } = useAuth();
  return (
    <Container>
      {isUser ? (
        <>
          {/* <div>Cart is empty for <strong>{currentUser.displayName || currentUser.email}</strong></div> */}
          <div className="fl fl-d-cl shop-container">
            <h1 className="title text-center">My Orders</h1>
            <div className="switcher fl">
              <NavLink to='/cart/active' className={`switch w100 fl fl-c cp ${!item && 'active'} `}>Active</NavLink>
              <NavLink to='/cart/history' className="switch w100 fl fl-c cp">History</NavLink>
              {/* <NavLink to='/cart/active'>Active</NavLink> */}
            </div>
          </div>

          <div className="fl fl-d-cl shop-container">
            {
              (item === 'active' || !item) &&
              <div className='pt1'>
                <h1 className='text-center'>You don't have any orders</h1>
                <div className="fl w100 pt1">
                    <Link className='order-link fl fl-c p12 w100 h100' to='/home'>Order Now</Link>
                </div>
              </div>
            }
            {

              item === 'history' &&
              <div className='pt1'>
                <h1 className='text-center'>You don't have any orders</h1>
                <div className="fl w100 pt1">
                    <Link className='order-link fl fl-c p12 w100 h100' to='/home'>Order Now</Link>
                </div>
              </div>
            }
          </div>
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
