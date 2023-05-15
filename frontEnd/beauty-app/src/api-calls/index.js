import axios from 'axios';

const API_URI = 'http://localhost:4000/';

export async function getUsers() {
  try {
    const res = await axios.get(API_URI + 'users');
    if (res.data) {
      res.data.forEach((user) => {
        const formattedDate = new Date(user.registrationDate);
        user.registrationDate = formattedDate.toLocaleString();
      });
    }
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function createUser(name, surname, email, registrationDate) {
  try {
    const res = await axios.post(API_URI + 'users', {
      name,
      surname,
      email,
      registrationDate,
    });
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function updateUser(id, name, surname, email) {
  try {
    const res = await axios.put(API_URI + `users/${id}`, { name, surname, email });
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function deleteUser(id) {
  try {
    const res = await axios.delete(API_URI + `users/${id}`);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}
