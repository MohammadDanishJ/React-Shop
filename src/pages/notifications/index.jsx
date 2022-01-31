import React from 'react';
import Container from '../../components/container/container.component';
import tabTitle from '../page';

const Notifications = () => {
    tabTitle(document.location.pathname);

    return (
        <Container>Notifications</Container>
    );
};

export default Notifications;
