import React from 'react';
import { render } from '@testing-library/react';
import Select from '../components/Select';

const list = [{ value: 'All', symbol: 'All' }];
const value = 'All';
const onChange = jest.fn();

describe('Select test', () => {
    test('renders Select component', () => {
        const select = render(
            <Select value={value} onChange={onChange}>
                {list}
            </Select>,
        );
        expect(select).toMatchSnapshot();
    });
});
