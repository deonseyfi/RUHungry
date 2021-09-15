import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './App.css';
import { ReactComponent as Logo } from './ruhungry.svg';
import Emoji from './Emoji';
import Select from './Select';

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
                <Logo className='App-logo' />
                <br />
                <Button variant='contained' color='primary' startIcon={<AccountCircleIcon />} onClick={getUsers}>
                    Fetch users in DB
                </Button>
                <Emoji label='happy' symbol='😀' />
                {users && (
                    <ul>
                        {users.map((user) => (
                            <li key={user.name}>{`${user.name}, ${user.age} years old`}</li>
                        ))}
                    </ul>
                )}
                <br />
                <Select />
            </header>
        </div>
    );
};

export default App;
