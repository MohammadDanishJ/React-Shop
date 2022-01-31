import React from 'react';
import Container from '../../components/container/container.component';
import tabTitle from "../page";

function Profile() {
  tabTitle(document.location.pathname);
  return (
    <Container>Profile</Container>
  );
}

export default Profile;
