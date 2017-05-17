import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router'

const propTypes = {};

const defaultProps = {};

class CoursesPage extends Component {
    constructor(props) {
        super(props)
        this.redirectToAddCoursePage.bind(this);
    }
    
    courseRow(course, index) {
        return <div key={index}>{course.title}</div>
    }
    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }
    render() {
        const {courses} = this.props;
        return (
            <div>
            <h1>Courses</h1>
            <CourseList courses={courses} />
            <input type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage}
                    />
            </div>

        );
    }
}

CoursesPage.propTypes = {    
    actions:PropTypes.object.isRequired,
    courses:PropTypes.array.isRequired
};

CoursesPage.defaultProps = defaultProps;

function mapStateToProps(state, ownProps) {
    return {
        courses:state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
