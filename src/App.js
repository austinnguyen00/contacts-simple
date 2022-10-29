import './App.css';
import { useState, useEffect } from 'react';
import UserCard from './components/UserCard';

function App() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    const GetUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
    };
    GetUsers();
  }, []);

  return (
    <>
      <div className='s1'>
        <div className='header'>
          <h1>Contacts</h1>
        </div>
      </div>
      <div className='s2'>
        <div className='users-wrapper'>
          {users.map((user, index) => (
            // <p key={index}>{user.name}</p>
            <UserCard key={index} user={user}></UserCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
