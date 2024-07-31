import './App.css'
import DisplayInfo from './components/DisplayInfo';
import UserForm from './components/UserForm';
import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState({ firstname: "", lastname: "", email: "", password: "", confirmPassword: "" });

  const newUser = (user) => {
    setUser(user)
  }
  return (
    <div className="App">
      {/* Component to add user form */}
      <UserForm setUser={newUser} />
      <hr className="border border-5 border-warning my-4 "></hr>
      {/* Component to disply user information form the form */}
      <DisplayInfo user={user} />
    </div>
  );
}
export default App;