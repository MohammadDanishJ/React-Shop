import React from 'react';
import tabTitle from "../page";

function Profile() {
  tabTitle(document.location.pathname);
  return (
    <section>Profile</section>
  );
}

export default Profile;
