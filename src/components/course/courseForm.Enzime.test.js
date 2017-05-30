import expect from 'expect'
import React from'react';
import {mount, shallow} from'enzyme'
import TestUtils from 'react-addons-test-utils'
import CourseForm from './CourseForm'

function setup() {
    let props = {
        course:{}, 
        saving:false, 
        errors:{},
        onSave: () => {},
        onChange:() => {}
    };
return shallow(<CourseForm {...props} />);
}

describe('Couse Form via Enzyme', () =>{
    it('renders form and h1', () => {
        const wrapper = setup(false);
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h1').text()).toEqual('Manage Course');
    })

})

