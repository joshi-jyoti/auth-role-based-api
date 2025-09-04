import React, { useEffect, useState } from 'react';
import API from '../api';

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    API.get('/users/profile').then(res => setProfile(res.data));
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {profile.username}</p>
      <p>Role: {profile.role}</p>
      <p>Last Login: {profile.lastLogin ? new Date(profile.lastLogin).toLocaleString() : 'Never'}</p>
    </div>
  );
}

export default Profile;