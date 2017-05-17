import {combineReducers} from 'redux'
import courses from './courseReducer'
<<<<<<< HEAD

const rootReducer = combineReducers({
    courses : courses
=======
import authors from './authorReducer';

const rootReducer = combineReducers({
    courses : courses,
    authors: authors

>>>>>>> 28ecc429c62b6110f9f6852d0b1788b3fa0e3aee
})

export default rootReducer