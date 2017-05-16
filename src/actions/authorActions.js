import AuthorApi from '../api/mockAuthorApi';

export function loadAuthorsSuccess(authors) {
    return {type: 'LOAD_AUTHORS_SUCCESS', authors}
}

export function loadCourses() {
 return function(dispatch) {
     return AuthorApi.getAllAuthros().then(authors => {
        dispatch(loadAuthorsSuccess(authors));
     }).catch(error => {
         throw(error);
     });
 }
}