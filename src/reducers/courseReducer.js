export default function courseReducer(state = [{title: "init"}], action) {
    switch(action.type) {
        case 'LOAD_COURSES_SUCCESS' :
            return action.courses;
        default:
            return state;
    }
}