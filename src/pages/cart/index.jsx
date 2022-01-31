import React from 'react';
import Container from '../../components/container/container.component';
import tabTitle from '../page';

const Cart = () => {
    tabTitle(document.location.pathname);
    return (
        <Container>
            <div>Your Cart is Empty</div>
        </Container>
    );
};

export default Cart;
