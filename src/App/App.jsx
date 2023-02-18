import { useState } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Users from '../components/Users';
import SignUp from '../components/SignUp';
import './App.scss';

function App() {
  const [users, setUsers] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const getUsers = async () => {
    const usersData = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6');
    setNextPage(usersData.data.links.next_url);
    setUsers(usersData.data.users);
  }

  return (
    <div className="app">
      <Header />
      <Hero
        title='Test assignment for front-end developer' 
        text="What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving."
        btnText='Sign up'
        href='#signUp'
      />
      <Users 
        getUsers={getUsers} 
        users={users} 
        setUsers={setUsers} 
        nextPage={nextPage} 
        setNextPage={setNextPage}
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
      />
      <SignUp 
        getUsers={getUsers} 
        setIsDisabled={setIsDisabled}
      />
    </div>
  );
}

export default App;
