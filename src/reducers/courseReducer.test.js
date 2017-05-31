import expect from 'expect';
import courseReducer from'./courseReducer';
import * as actions from '../actions/courseActions'

describe('Course Reducer', () => {
    it('sould add course when passed CREATE_COURSE_SUCCESS', () => {
        //Arrange
        const initialState = [
            {title:'A'},
            {title:'B'}
        ];

        const newCourse = {title:'C'};

        const action = actions.createCourseSuccess(newCourse);

        //Act
        const newState = courseReducer(initialState, action);

        //Assert
        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual('A');
    });
});
