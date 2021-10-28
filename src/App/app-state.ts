/**
 * States used for App.
 */
interface AppState {
    /**
     * Boolean to check if initial Start button was clicked.
     */
    clickedStart: boolean;
    /**
     * Value of the first chosen food category.
     */
    firstCategoryValue: string;
    /**
     * Value of the second chosen food category.
     */
    secondCategoryValue: string;
    /**
     * Boolean to check if second category is desired.
     */
    addCategory: boolean;
}
export default AppState;
