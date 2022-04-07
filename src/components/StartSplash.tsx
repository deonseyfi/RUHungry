import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/ruhungry.svg';

/**
 * Start Splash component.
 *
 * @returns {React.ReactElement} Custom Start Splash component.
 */
const StartSplash = (): React.ReactElement => (
    <>
        <Logo className='App-logo' />
        <br />
        <br />
        <br />
        <Button
            style={{ minWidth: '5rem', minHeight: '2.5rem' }}
            variant='outlined'
            color='inherit'
            size='large'
            component={Link}
            to='/home'
        >
            I&apos;m Craving ... 🤔
        </Button>
    </>
);

export default StartSplash;
