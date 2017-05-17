import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
<<<<<<< HEAD
=======
import thunk from 'redux-thunk'
>>>>>>> 28ecc429c62b6110f9f6852d0b1788b3fa0e3aee

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
<<<<<<< HEAD
        initialState
=======
        initialState,
        applyMiddleware(thunk)
>>>>>>> 28ecc429c62b6110f9f6852d0b1788b3fa0e3aee
    );
}