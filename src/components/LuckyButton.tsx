import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Emoji from './Emoji';
import CATEGORIES from '../App/constants';

/**
 * I'm Feeling Lucky Button.
 *
 * @returns {React.ReactElement} Button component.
 */
const LuckyButton = (): React.ReactElement => {
    /**
     * Function to return a random food category from list.
     *
     * @returns {string} The randomly chosen food category.
     */
    const selectRandomCategory = (): string => {
        const categoryValue = CATEGORIES.map((category) => category.value);
        const randomCategory = Math.floor(Math.random() * categoryValue.length);
        // If returned category was All or blank, generate a new category.
        if (categoryValue[randomCategory] === 'All' || categoryValue[randomCategory] === '') {
            return selectRandomCategory();
        }
        return categoryValue[randomCategory];
    };
    return (
        <Button
            variant='outlined'
            color='inherit'
            startIcon={<Emoji label='shrug' symbol='🤷' />}
            component={Link}
            to={`/restaurants/first=${selectRandomCategory()}`}
        >
            I&apos;m Craving ... 🤔
        </Button>
    );
};

export default LuckyButton;
