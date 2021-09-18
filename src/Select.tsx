import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Select as MuiSelect, FormControl, Input } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            width: 'auto',
            fontSize: '25',
            textAlign: 'center',
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        select: { color: 'gray' },
        icon: { color: 'white' },
        underline: {
            borderBottom: '2px solid white',
            '&:after': {
                borderBottom: '2px solid white',
            },
        },
    }),
);

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
        value: string;
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
     * Handle a change of selection.
     */
    onChange: (event: React.ChangeEvent<{
        /**
         * Value being passed into the onChange call.
         */
        value: unknown;
    }>,) => void
}

/**
 * Select component.
 *
 * @param {SelectProps} props Select props.
 * @returns {React.ReactElement<SelectProps>} Select component with props.
 */
const Select = (props: SelectProps): React.ReactElement<SelectProps> => {
    const classes = useStyles();
    // Map list of children into HTML Option items for Select
    const list = props.children.map((items) =>
        <option key={items.value} value={items.value}>{items.symbol}</option>);

    return (
        <FormControl className={classes.formControl}>
            <MuiSelect
                native
                value={props.value}
                onChange={props.onChange}
                // inputProps={{
                //     style: { fontSize: 16 },
                //     name: 'value',
                // }}
                classes={{
                    select: classes.select,
                    icon: classes.icon,
                }}
                input={<Input classes={{ underline: classes.underline }} />}
            >
                {list}
            </MuiSelect>
        </FormControl>
    );
};

export default Select;
