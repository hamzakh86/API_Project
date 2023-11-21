// Import the React library to create React components
import React from 'react';

// Import the UserList component from the './UserList' file
import UserList from './UserList';

// Define the App component, which serves as the root component of the application
function App() {
  // Return JSX representing the structure of the App component
  return (
    // A div with a className of 'App', which can be styled using CSS
    <div className="App">
      {/* Render the UserList component within the App component */}
      <UserList />
    </div>
  );
}

// Export the App component as the default export of this module
export default App;
