<<<<<<< HEAD
export function createCourse(course) {
    return {type: 'CREATE_COURSE', course}
=======
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
    return {type: 'LOAD_COURSES_SUCCESS', courses}
}

export function loadCourses() {
 return function(dispatch) {
     return courseApi.getAllCourses().then(courses => {
        dispatch(loadCoursesSuccess(courses));
     }).catch(error => {
         throw(error);
     });
 }
>>>>>>> 28ecc429c62b6110f9f6852d0b1788b3fa0e3aee
}