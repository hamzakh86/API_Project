import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css';

// Define a functional component named UserList
const UserList = () => {
  // State variables to store the list of users and the ID of the selected user
  const [listOfUsers, setListOfUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  // useEffect hook to fetch data from an API when the component mounts
  useEffect(() => {
    // Define an asynchronous function to fetch data
    const fetchData = async () => {
      try {
        // Make a GET request to the specified API endpoint
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        // Update the state with the fetched user data
        setListOfUsers(response.data);
      } catch (error) {
        // Log an error message if there is an issue fetching data
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts (empty dependency array)
    fetchData();
  }, []);

  // Event handler function to handle user click events and toggle selected user
  const handleUserClick = (userId) => {
    // If the clicked user is already selected, unselect; otherwise, select
    setSelectedUserId(userId === selectedUserId ? null : userId);
  };

  // JSX to render the user list component
  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <ul>
        {/* Map through the list of users and render a list item for each user */}
        {listOfUsers.map((user) => (
          <li key={user.id} className={`user-card ${selectedUserId === user.id ? 'selected' : ''}`}>
            <img
              src={`https://i.pravatar.cc/150?img=${user.id}`}
              alt={`User ${user.id}`}
            />

            {/* Display user information */}
            <div>
              <strong>ID:</strong> {user.id}
            </div>
            <div>
              <strong>Name:</strong> {user.name}
            </div>
            <div>
              <strong>Username:</strong> {user.username}
            </div>
            <div>
              <strong>Email:</strong> {user.email}
            </div>

            {/* Display additional details if the user is selected */}
            {selectedUserId === user.id && (
              <div>
                {/* Display address information */}
                <div className="address">
                  <strong>Address:</strong>
                  <div>Street: {user.address.street}</div>
                  <div>Suite: {user.address.suite}</div>
                  <div>City: {user.address.city}</div>
                  <div>Zipcode: {user.address.zipcode}</div>
                  <div className="geo">
                    <strong>Geo:</strong>
                    <div>Lat: {user.address.geo.lat}</div>
                    <div>Lng: {user.address.geo.lng}</div>
                  </div>
                </div>

                {/* Display contact and company information */}
                <div>
                  <strong>Phone:</strong> {user.phone}
                </div>
                <div>
                  <strong>Website:</strong> {user.website}
                </div>
                <div className="company">
                  <strong>Company:</strong>
                  <div>Name: {user.company.name}</div>
                  <div>Catch Phrase: {user.company.catchPhrase}</div>
                  <div>BS: {user.company.bs}</div>
                </div>
              </div>
            )}

            {/* Button to select/deselect the user */}
            <div onClick={() => handleUserClick(user.id)} className="select-button">
              Select
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export the UserList component as the default export of this module
export default UserList;
