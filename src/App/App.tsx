import React from 'react';
import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';
import HighlightOffSharpIcon from '@material-ui/icons/HighlightOffSharp';
import './App.css';
import AppState from './app-state';
import Select from '../components/Select';
import StartSplash from '../components/StartSplash';
import LuckyButton from '../components/LuckyButton';
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
        this.handleNextButton = this.handleNextButton.bind(this);
    }

    /**
     * Move from Home to Cravings.
     */
    public handleClickedStart = () => {
        this.setState({ clickedStart: true });
    };

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
     * Temporarily alert which food categories have been selected.
     */
    public handleNextButton = () => {
        if (this.state.addCategory) {
            alert(`Chosen ${this.state.firstCategoryValue} and ${this.state.secondCategoryValue}`);
        } else {
            alert(`Chosen ${this.state.firstCategoryValue}`);
        }
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
                <div className='App-header'>
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
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            paddingLeft: '3rem',
                                        }}
                                    >
                                        <Select
                                            value={this.state.secondCategoryValue}
                                            onChange={(event): void => {
                                                this.handleSecondCategoryChange(String(event.target.value));
                                            }}
                                        >
                                            {secondCategoryList}
                                        </Select>
                                        <IconButton
                                            size='medium'
                                            onClick={() => {
                                                this.setState({ addCategory: false });
                                                this.setState({ secondCategoryValue: '' });
                                            }}
                                        >
                                            <HighlightOffSharpIcon color='secondary' />
                                        </IconButton>
                                    </div>
                                    <div>
                                        The current selected value is{' '}
                                        {this.state.secondCategoryValue === ''
                                            ? 'Blank'
                                            : this.state.secondCategoryValue}
                                    </div>
                                </>
                            )}
                            <br />
                            <br />
                            <br />
                            {(!this.state.addCategory ||
                                (this.state.addCategory && this.state.secondCategoryValue !== '')) && (
                                <Button variant='outlined' color='inherit' onClick={this.handleNextButton}>
                                    Next
                                </Button>
                            )}
                            <br />
                            <br />
                            <br />
                            <LuckyButton />
                        </>
                    )}
                </div>
            </div>
        );
    }
}
export default App;
