import React, { useState } from 'react';
import ClientForm from './components/ClientForm/ClientForm.jsx';
import Header from './components/Header/Header.jsx';
import UsersList from './components/UsersList/UsersList.jsx';

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <Header />
      <ClientForm setUsers={setUsers} />
      <UsersList users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
