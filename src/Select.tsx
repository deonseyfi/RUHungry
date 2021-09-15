import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Select as MuiSelect, FormControl, Input } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            width: '3rem',
            fontSize: '25',
            textAlign: 'center',
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        select: {
            color: 'white',
        },
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
 * Native Select component.
 *
 * @returns {React.ReactElement} A custom Select.
 */
const Select = (): React.ReactElement => {
    const classes = useStyles();
    const [category, setCategory] = React.useState('');
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCategory(event.target.value as string);
    };
    return (
        <FormControl className={classes.formControl} style={{ fontSize: 50 }}>
            <MuiSelect
                native
                value={category}
                onChange={handleChange}
                inputProps={{
                    name: 'category',
                }}
                classes={{
                    select: classes.select,
                    icon: classes.icon,
                }}
                input={<Input classes={{ underline: classes.underline }} />}
            >
                <option aria-label='None' value='' disabled />
                <option value='smile'>😀</option>
                <option value='cat'>🐈</option>
                <option value='dog'>🐶</option>
            </MuiSelect>
        </FormControl>
    );
};

export default Select;
