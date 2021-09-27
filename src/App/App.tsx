import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './App.css';
import { ReactComponent as Logo } from './ruhungry.svg';
import Emoji from '../components/Emoji';
import Select from '../components/Select';

/**
 * User type.
 */
type User = {
   /**
    * Name of the User.
    */
    name: string;
    /**
     * Age of the User.
     */
    age: number;
};

const list = [
    { value: 'All', symbol: 'All' },
    { value: 'Burgers', symbol: '🍔' },
    { value: 'Hot Dogs', symbol: '🌭' },
    { value: 'Mexican', symbol: '🌮' },
    { value: 'Pizza', symbol: '🍕' },
    { value: 'Italian', symbol: '🍝' },
];

/**
 * Main App component to be rendered.
 *
 * @returns {React.ReactElement} Main app component.
 */
const App: React.FC = (): React.ReactElement => {
    const [users, setUsers] = useState<User[]>();
    const [selectValue, setSelectValue] = React.useState('All');
    /**
     * Fetches users from the database.
     */
    const getUsers = () => {
        fetch('/api/users')
            .then((res) => res.json())
            .then(setUsers);
    };
    /**
     * Function to change the current selected option.
     *
     * @param {React.ChangeEvent} event Change of selection.
     */
    const handleSelectChange = (
        event: React.ChangeEvent<
            {
                /**
                 * Selected value.
                 */
                value: unknown
            }
            >,
    ) => {
        setSelectValue(event.target.value as string);
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
                <Select value={selectValue} onChange={handleSelectChange}>
                    {list}
                </Select>
                <p>The selected item is { selectValue }</p>
            </header>
        </div>
    );
};

export default App;
