import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffSharpIcon from '@material-ui/icons/HighlightOffSharp';
import { Link } from 'react-router-dom';
import './App.css';
import AppState from './app-state';
import Select from '../components/Select';
import StartSplash from '../components/StartSplash';
import LuckyButton from '../components/LuckyButton';
import CATEGORIES from './constants';
import { FoodCategoryList } from './types';

/**
 * RUHungry Home Page.
 */
class Home extends React.Component<{}, AppState> {
    /**
     * Home constructor.
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
     * Clear all selected categories to original state.
     */
    public handleClearButton = () => {
        this.setState({ firstCategoryValue: 'All' });
        this.setState({ secondCategoryValue: '' });
        this.setState({ addCategory: false });
    };

    /**
     * Renders Home Page.
     *
     * @returns {React.ReactNode} Rendered Home Page.
     */
    render(): React.ReactNode {
        // List of Categories for first Select.
        // If second category, remove All, blank, and second category value.
        // Else, remove blank.
        const firstCategoryList: FoodCategoryList = CATEGORIES.filter((category) =>
            (this.state.addCategory
                ? category.label !== this.state.secondCategoryValue && category.label !== '' && category.label !== 'All'
                : category.label !== ''),
        );

        // New List of Categories for second Select.
        // If second category value is blank, remove All and first category value.
        // Else, remove All, first category value, and blank.
        const secondCategoryList: FoodCategoryList = CATEGORIES.filter((category) =>
            (this.state.secondCategoryValue === ''
                ? category.label !== this.state.firstCategoryValue && category.label !== 'All'
                : category.label !== this.state.firstCategoryValue && category.label !== 'All' && category.label !== ''),
        );
        /**
         * Returns the path to navigate to when Next button is clicked.
         *
         * @returns {string} The path to navigate to.
         */
        const getRestaurantsPath = (): string =>
            (this.state.secondCategoryValue !== ''
                ? `/restaurants/first=${this.state.firstCategoryValue}&second=${this.state.secondCategoryValue}`
                : `/restaurants/first=${this.state.firstCategoryValue}`);
        return (
            <>
                {!this.state.clickedStart && <StartSplash onClick={this.handleClickedStart} />}
                {this.state.clickedStart && (
                    <>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'right',
                                paddingLeft: '18rem',
                            }}
                        >
                            {this.state.firstCategoryValue !== 'All' && (
                                <Button
                                    id='clear'
                                    variant='outlined'
                                    color='secondary'
                                    onClick={() => {
                                        this.handleClearButton();
                                    }}
                                >
                                    Clear
                                </Button>
                            )}
                        </div>
                        <Select
                            value={this.state.firstCategoryValue}
                            onChange={(event): void => {
                                this.handleFirstCategoryChange(String(event.target.value));
                            }}
                        >
                            {firstCategoryList}
                        </Select>
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
                            </>
                        )}
                        <br />
                        <br />
                        <br />
                        {(!this.state.addCategory ||
                            (this.state.addCategory && this.state.secondCategoryValue !== '')) && (
                            <Button variant='outlined' color='inherit' component={Link} to={getRestaurantsPath()}>
                                Next
                            </Button>
                        )}
                        <br />
                        <br />
                        <br />
                        <LuckyButton />
                    </>
                )}
            </>
        );
    }
}
export default Home;
