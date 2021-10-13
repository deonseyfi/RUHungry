import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import Select from '../components/Select';
import StartSplash from '../components/StartSplash';
import CATEGORIES from './constants';
import { FoodCategoryList } from './types';

/**
 * Main App component to be rendered.
 *
 * @returns {React.ReactElement} Main app component.
 */
const App: React.FC = (): React.ReactElement => {
    const [clickedStart, setClickedStart] = React.useState(false);
    const [firstCategoryValue, setFirstCategoryValue] = React.useState('All');
    const [secondCategoryValue, setSecondCategoryValue] = React.useState('');
    const [secondCategory, setSecondCategory] = React.useState(false);
    /**
     * Move from Home to Cravings.
     */
    const handleClickedStart = () => {
        setClickedStart(true);
    };
    /**
     * Function to change the current selected option in the first category.
     *
     * @param {React.ChangeEvent} event Change of selection.
     */
    const handleFirstCategoryChange = (
        event: React.ChangeEvent<{
            /**
             * Selected value.
             */
            value: unknown;
        }>,
    ) => {
        setFirstCategoryValue(event.target.value as string);
    };
    /**
     * Function to change the current selected option in the second category.
     *
     * @param {React.ChangeEvent} event Change of selection.
     */
    const handleSecondCategoryChange = (
        event: React.ChangeEvent<{
            /**
             * Selected value.
             */
            value: unknown;
        }>,
    ) => {
        setSecondCategoryValue(event.target.value as string);
    };

    // List of Categories for first Select.
    // If second category, remove All, blank, and second category value.
    // Else, remove blank.
    const firstCategoryList: FoodCategoryList = CATEGORIES.filter((category) =>
        (secondCategory
            ? category.value !== secondCategoryValue && category.value !== '' && category.value !== 'All'
            : category.value !== ''),
    );

    // New List of Categories for second Select.
    // If second category value is blank, remove All and first category value.
    // Else, remove All, first category value, and blank.
    const secondCategoryList: FoodCategoryList = CATEGORIES.filter((category) =>
        (secondCategoryValue === ''
            ? category.value !== firstCategoryValue && category.value !== 'All'
            : category.value !== firstCategoryValue && category.value !== 'All' && category.value !== ''),
    );

    return (
        <div className='App'>
            <header className='App-header'>
                {!clickedStart && <StartSplash onClick={handleClickedStart} />}
                {clickedStart && (
                    <>
                        <Select value={firstCategoryValue} onChange={handleFirstCategoryChange}>
                            {firstCategoryList}
                        </Select>
                        <div>(DEV) The current selected value is {firstCategoryValue}</div>
                        <br />
                        {firstCategoryValue !== 'All' && secondCategory === false && (
                            <Button
                                variant='outlined'
                                color='inherit'
                                onClick={() => {
                                    setSecondCategory(true);
                                }}
                            >
                                {' '}
                                Add Another Category
                            </Button>
                        )}
                        {secondCategory === true && (
                            <>
                                <Select value={secondCategoryValue} onChange={handleSecondCategoryChange}>
                                    {secondCategoryList}
                                </Select>
                                <div>
                                    (DEV) The current selected value is{' '}
                                    {secondCategoryValue === '' ? 'Blank' : secondCategoryValue}
                                </div>
                            </>
                        )}
                    </>
                )}
            </header>
        </div>
    );
};

export default App;
