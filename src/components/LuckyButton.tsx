import React from 'react';
import Button from '@material-ui/core/Button';
// eslint-disable-next-line spellcheck/spell-checker
// import AutorenewIcon from '@material-ui/icons/Autorenew';
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
            onClick={() => {
                // eslint-disable-next-line no-alert
                alert(selectRandomCategory());
                // eventually this.setState(randomCategory) inside App
                // selectRandomCategory to be moved to App
            }}
        >
            I&apos;m Feeling Lucky
        </Button>
    );
};

export default LuckyButton;
