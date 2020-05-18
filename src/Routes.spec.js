import React from 'react';
import Routes from './Routes';
import { shallow } from 'enzyme';

describe('Routes test ', () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<Routes />);
    });

    it('Routes check hello existing', () => {
        console.log(wrapper.debug());
    });
});
