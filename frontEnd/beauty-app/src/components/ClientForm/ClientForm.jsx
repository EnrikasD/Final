import React, { useState } from 'react';
import { createUser, getUsers } from '../../api-calls';
import { StyledClientForm, StyledMessageDiv } from './ClientForm.styled';

export default function ContactField({ setUsers }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === '' || surname === '' || email === '' || date === '') {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1500);
    } else {
      const res = await createUser(name, surname, email, date);
      if (res) {
        const newUsers = await getUsers();
        setUsers(newUsers);
        setSubmitted(true);
        setError(false);
        console.log(res.message);
        setTimeout(() => {
          setSubmitted(false);
        }, 1500);
      }
    }
  };

  const successMessage = () => {
    return (
      <div
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>
          {name} {surname} successfully registered!!
        </h1>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields correctly</h1>
      </div>
    );
  };

  return (
    <div>
      <div>
        <h1 style={{ textAlign: 'center', color: 'purple' }}>User Registration</h1>
      </div>
      <StyledClientForm onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Your name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} />
        <input
          type="text"
          placeholder="Your surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="datetime-local" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />
        <button type="submit">Register</button>
      </StyledClientForm>

      <StyledMessageDiv>
        {errorMessage()}
        {successMessage()}
      </StyledMessageDiv>
    </div>
  );
}
