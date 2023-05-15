import React, { useRef } from 'react';
import { StyledButtonDiv, StyledUser } from './Users.styled';
import { deleteUser, updateUser } from '../../api-calls';
import { getUsers } from '../../api-calls';
import { EditForm } from '../EditForm/EditForm';

export default function Users({ id, name, surname, email, date, setUsers }) {
  const editFormRef = useRef(null);

  async function deleteHandler() {
    const res = await deleteUser(id);
    if (res) {
      console.log(res);
      const newUsers = await getUsers();
      setUsers(newUsers);
    }
  }

  function editClickHandler() {
    editFormRef.current.showModal();
  }

  async function editHandler(userId, newName, newSurname, newEmail) {
    const res = await updateUser(userId, newName, newSurname, newEmail);
    if (res) {
      editFormRef.current.close();
      console.log(res);
      const newUsers = await getUsers();
      setUsers(newUsers);
    }
  }

  return (
    <>
      <dialog ref={editFormRef}>
        <EditForm
          editHandler={editHandler}
          onCancel={() => editFormRef.current.close()}
          id={id}
          name={name}
          surname={surname}
          email={email}
        />
      </dialog>

      <StyledUser>
        <h2>{name}</h2>
        <h2>{surname}</h2>
        <h3>Email: {email}</h3>
        <h4>Registration date: {date}</h4>
        <StyledButtonDiv>
          <button onClick={editClickHandler}>Edit</button>
          <button onClick={deleteHandler}>Delete</button>
        </StyledButtonDiv>
      </StyledUser>
    </>
  );
}
