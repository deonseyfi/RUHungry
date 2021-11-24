import { Button } from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * 404 page to hit if directed to invalid path.
 *
 * @returns {React.ReactElement} Not Found Page component.
 */
const NotFoundPage = (): React.ReactElement => {
    const navigate = useNavigate();
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>404 NOT FOUND</h1>
            <Button
                variant='outlined'
                color='inherit'
                onClick={() => { navigate('/'); }}
            >Go Home
            </Button>
        </div>
    );
};
export default NotFoundPage;
