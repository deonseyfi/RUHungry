import React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { Select as MuiSelect } from '@material-ui/core';
import theme from '../App/theme';

/**
 * Select props.
 */
interface SelectProps {
    /**
     * List of items in the Select drop-down.
     */
    children: {
        /**
         * Text representation of the drop-down child item.
         */
        label: string;
        /**
         * Emoji representation of the drop-down child item.
         */
        symbol: string;
    }[];
    /**
     * Value of the selected item.
     */
    value: string;
    /**
     * Whether the Select is disabled.
     */
    disabled?: boolean;
    /**
     * Handle a change of selection.
     */
    onChange: (
        event: React.ChangeEvent<{
            /**
             * Value being passed into the onChange call.
             */
            value: unknown;
        }>,
    ) => void;
}

/**
 * Select component.
 *
 * @param {SelectProps} props Select props.
 * @returns {React.ReactElement<SelectProps>} Select component with props.
 */
const Select = (props: SelectProps): React.ReactElement<SelectProps> => {
    // Map list of children into HTML Option items for Select
    const list = props.children.map((category) => (
        <option key={category.label} value={category.label}>
            {category.symbol}
        </option>
    ));

    return (
        <ThemeProvider theme={theme}>
            <MuiSelect
                native
                value={props.value}
                disabled={props.disabled}
                onChange={props.onChange}
            >
                {list}
            </MuiSelect>
        </ThemeProvider>
    );
};
Select.defaultProps = {
    disabled: false,
};

export default Select;
