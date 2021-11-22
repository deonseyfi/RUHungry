import React from 'react';
import Button from '@material-ui/core/Button';
import { ReactComponent as Logo } from '../App/ruhungry.svg';

/**
 * Start Splash props.
 */
interface StartSplashProps {
    /**
     *
     */
    onClick: () => void;
}

/**
 * Start Splash component.
 *
 * @param {StartSplashProps} props Start Splash props.
 * @returns {React.ReactElement<StartSplashProps>} Custom Start Splash component.
 */
const StartSplash = (props: StartSplashProps): React.ReactElement<StartSplashProps> => (
    <>
        <Logo className='App-logo' />
        <br />
        <br />
        <br />
        <Button
            style={{ minWidth: '5rem', minHeight: '2.5rem' }}
            variant='outlined'
            color='inherit'
            onClick={props.onClick}
            size='large'
        >
            I&apos;m Craving ... 🤔
        </Button>
    </>
);

export default StartSplash;
