import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

/**
 *
 */
const NotFoundPage = () => (
    <div style={{ textAlign: 'center' }}>
        <h1>404 NOT FOUND</h1>
        <Button
            variant='outlined'
            color='inherit'
            component={Link}
            to='/'
        >Go Home
        </Button>
    </div>
);
export default NotFoundPage;
