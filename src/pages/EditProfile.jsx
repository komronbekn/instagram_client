// src/pages/settings/EditProfile.jsx
import React, { useState } from 'react';

const EditProfile = () => {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', { username, bio });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
      <form onSubmit={handleProfileSubmit}>
        <div>
          <label className="block font-medium text-sm mb-1">Username</label>
          <input
            type="text"
            className="w-full p-2 bg-gray-200 rounded-md text-gray-900 focus:outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div className="mt-4">
          <label className="block font-medium text-sm mb-1">Bio</label>
          <textarea
            maxLength={150}
            className="w-full p-2 bg-gray-200 rounded-md text-gray-900 focus:outline-none"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell something about yourself"
          />
          <p className="text-sm text-gray-600 mt-1">{bio.length} / 150</p>
        </div>
        <button className="w-full py-2 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;