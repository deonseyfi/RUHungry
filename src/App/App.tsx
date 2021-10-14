import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import AppState from './app-state';
import Select from '../components/Select';
import StartSplash from '../components/StartSplash';
import CATEGORIES from './constants';
import { FoodCategoryList } from './types';

/**
 * Main App class.
 */
class App extends React.Component<{}, AppState> {
    /**
     * App constructor.
     */
    public constructor(props: {}) {
        super(props);
        this.state = {
            clickedStart: false,
            firstCategoryValue: 'All',
            secondCategoryValue: '',
            addCategory: false,
        };
        this.handleClickedStart = this.handleClickedStart.bind(this);
        this.handleFirstCategoryChange = this.handleFirstCategoryChange.bind(this);
        this.handleSecondCategoryChange = this.handleSecondCategoryChange.bind(this);
    }

    /**
     * Move from Home to Cravings.
     */
    public handleClickedStart = () => {
        this.setState({ clickedStart: true });
    }

    /**
     * Function to change the current selected option in the first category.
     *
     * @param {string} value The first Select's value.
     */
    public handleFirstCategoryChange = (value: string) => {
        this.setState({ firstCategoryValue: value });
    };

    /**
     * Function to change the current selected option in the second category.
     *
     * @param {string} value The second Select's value.
     */
    public handleSecondCategoryChange = (value: string) => {
        this.setState({ secondCategoryValue: value });
    };

    /**
     * Renders App.
     *
     * @returns {React.ReactNode} Rendered App.
     */
    render(): React.ReactNode {
        // List of Categories for first Select.
        // If second category, remove All, blank, and second category value.
        // Else, remove blank.
        const firstCategoryList: FoodCategoryList = CATEGORIES.filter((category) =>
            (this.state.addCategory
                ? category.value !== this.state.secondCategoryValue && category.value !== '' && category.value !== 'All'
                : category.value !== ''),
        );

        // New List of Categories for second Select.
        // If second category value is blank, remove All and first category value.
        // Else, remove All, first category value, and blank.
        const secondCategoryList: FoodCategoryList = CATEGORIES.filter((category) =>
            (this.state.secondCategoryValue === ''
                ? category.value !== this.state.firstCategoryValue && category.value !== 'All'
                : category.value !== this.state.firstCategoryValue && category.value !== 'All' && category.value !== ''),
        );
        return (
            <div className='App'>
                <header className='App-header'>
                    {!this.state.clickedStart && <StartSplash onClick={this.handleClickedStart} />}
                    {this.state.clickedStart && (
                        <>
                            <Select
                                value={this.state.firstCategoryValue}
                                onChange={(event): void => {
                                    this.handleFirstCategoryChange(String(event.target.value));
                                }}
                            >
                                {firstCategoryList}
                            </Select>
                            <div>(DEV) The current selected value is {this.state.firstCategoryValue}</div>
                            <br />
                            {this.state.firstCategoryValue !== 'All' && this.state.addCategory === false && (
                                <Button
                                    id='add'
                                    variant='outlined'
                                    color='inherit'
                                    onClick={() => {
                                        this.setState({ addCategory: true });
                                    }}
                                >
                                    {' '}
                                    Add Another Category
                                </Button>
                            )}
                            {this.state.addCategory === true && (
                                <>
                                    <Select
                                        value={this.state.secondCategoryValue}
                                        onChange={(event): void => {
                                            this.handleFirstCategoryChange(String(event.target.value));
                                        }}
                                    >
                                        {secondCategoryList}
                                    </Select>
                                    <div>
                                        (DEV) The current selected value is{' '}
                                        {this.state.secondCategoryValue === ''
                                            ? 'Blank'
                                            : this.state.secondCategoryValue}
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </header>
            </div>
        );
    }
}
export default App;
