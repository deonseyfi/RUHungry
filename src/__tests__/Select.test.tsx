import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Select from '../components/Select';

configure({ adapter: new Adapter() });

const list = [{ value: 'All', symbol: 'All' }];
const value = 'All';
const onChange = jest.fn();

describe('Select test', () => {
    test('renders Select component', () => {
        const select = mount(
            <Select value={value} onChange={onChange}>
                {list}
            </Select>,
        );
        expect(select).toMatchSnapshot();
    });
});
