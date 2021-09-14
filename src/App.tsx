import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import logo from './logo.svg';
import './App.css';

type User = {
    name: string;
    age: number;
};

const App: React.FC = () => {
    const [users, setUsers] = useState<User[]>();

    const getUsers = () => {
        fetch('/api/users')
            .then((res) => res.json())
            .then(setUsers);
    };

    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className='App-link' href='https://reactjs.org'>
                    Learn React
                </a>
                <br />
                <Button variant='contained' color='primary' startIcon={<AccountCircleIcon />} onClick={getUsers}>
                    Fetch users in DB
                </Button>
                {users && (
                    <ul>
                        {users.map((user) => (
                            <li key={user.name}>{`${user.name}, ${user.age} years old`}</li>
                        ))}
                    </ul>
                )}
            </header>
        </div>
    );
};

export default App;
