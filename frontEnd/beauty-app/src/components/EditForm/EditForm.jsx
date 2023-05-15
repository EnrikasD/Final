import React, { useState } from 'react';
import { StyledEditForm } from './EditForm.styled';

export function EditForm({ id, name, surname, email, editHandler, onCancel }) {
  const [newName, setNewName] = useState(name);
  const [newSurname, setNewSurname] = useState(surname);
  const [newEmail, setNewEmail] = useState(email);

  function submitHandler(e) {
    e.preventDefault();
    editHandler(id, newName, newSurname, newEmail);
  }

  return (
    <StyledEditForm onSubmit={submitHandler}>
      <input type="text" placeholder="Your name" value={newName} onChange={(e) => setNewName(e.target.value)} />
      <input type="text" placeholder="Your surname" value={newSurname} onChange={(e) => setNewSurname(e.target.value)} />
      <input type="email" placeholder="Your email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
      <div>
        <button type="submit">Submit</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </StyledEditForm>
  );
}
