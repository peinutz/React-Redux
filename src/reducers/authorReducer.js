import initialState from './initialState'

const authorReducer = (state = initialState.authors, action) => {
    switch (action.type) {
        case 'LOAD_AUTHORS_SUCCESS':
        debugger;
            return action.authors
        default:
            return state
    }
}

export default authorReducer
