<<<<<<< HEAD
export default function courseReducer(state = [{title: "init"}], action) {
    switch(action.type) {
        case 'CREATE_COURSE' :
            return [...state,
            Object.assign({}, action.course)]
=======
import initialState from './initialState'

export default function courseReducer(state = initialState.courses, action) {
    switch(action.type) {
        case 'LOAD_COURSES_SUCCESS' :
            return action.courses;
>>>>>>> 28ecc429c62b6110f9f6852d0b1788b3fa0e3aee
        default:
            return state;
    }
}