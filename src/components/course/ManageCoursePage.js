import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as courseActions from '../../actions/courseActions'
import CourseForm from './CourseForm'
import toastr from 'toastr'
import {authorsFormattedForDropdown} from '../../selectors/selectors'


const propTypes = {}

const defaultProps = {}

export class ManageCoursePage extends Component {
    constructor(props, context) {
        super(props)
        this.state = {
            course:Object.assign({}, this.props.course),
            errors:{}
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.course.id != nextProps.course.id) {
            this.setState({course: Object.assign({}, nextProps.course)})
        }
    }

    updateCourseState(event) {
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        this.setState({
            course: course
        })
    }

    saveCourse(evt) {
        evt.preventDefault();
        if(!this.courseFormIsValid()) {
            return;
        }
        const newCourse = this.state.course;
        this.props.actions.saveCourse(newCourse).then(() => this.context.router.push('/courses'))
        .catch(error => { 
            toastr.error(error);
        });

    }

    courseFormIsValid() {
        let formIsValid = true;
        let errors = {};

        if(this.state.course.title.length < 5) {
            errors.title = 'Title must be at least 5 characters';
            formIsValid = false;
        }

        this.setState({errors:errors});
        return formIsValid;
    }

    render() {
        return (
                    <CourseForm 
                        allAuthors={this.props.authors}
                        onChange={this.updateCourseState}
                        onSave={this.saveCourse}
                        course={this.state.course}
                        errors={this.state.errors}
                        />

        )
    }
}

ManageCoursePage.propTypes = {
    course : PropTypes.object.isRequired,
    authors : PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

ManageCoursePage.defaultProps = defaultProps

ManageCoursePage.contextTypes = {
    router: PropTypes.object
}
function getCourseById(courses, id) {
    const course = courses.filter(course => course.id == id);
    if(course)     return course[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const courseId = ownProps.params.id;
    let course = {id:'', watchHref:'', title:'', authorId:'', length:'', category:''};

    if(courseId && state.courses.length > 0) {
        course = getCourseById(state.courses,courseId);
    }

    return {
        course:course,
        authors: authorsFormattedForDropdown(state.authors)
    }
}


function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators(courseActions, dispatch)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)
