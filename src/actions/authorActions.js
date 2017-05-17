import AuthorApi from '../api/mockAuthorApi';

export function loadAuthorsSuccess(authors) {

    return {type: 'LOAD_AUTHORS_SUCCESS', authors}
}

import {beginAjaxCall} from './ajaxStatusActions';


export function loadAuthors() {
 return function(dispatch) {
     dispatch(beginAjaxCall())
     return AuthorApi.getAllAuthors().then(authors => {
        dispatch(loadAuthorsSuccess(authors));
     }).catch(error => {
         throw(error);
     });
 }
}

