import React, { useEffect } from 'react';
import { getUsers } from '../../api-calls/index.js';
import Users from '../Users/Users';
import { StyledUserList } from './UsersList.styled.js';

export default function UsersList({ users, setUsers }) {
  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <StyledUserList>
      {users &&
        users.map((user, index) => (
          <Users
            key={index}
            id={user._id}
            name={user.name}
            surname={user.surname}
            email={user.email}
            date={user.registrationDate}
            setUsers={setUsers}
          />
        ))}
    </StyledUserList>
  );
}
