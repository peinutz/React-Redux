import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as courseActions from '../../actions/courseActions'
import CourseForm from './CourseForm'


const propTypes = {}

const defaultProps = {}

class ManageCoursePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            course:Object.assign({}, this.props.course),
            errors:{}
        };
    }

    render() {
        return (
                    <CourseForm 
                        allAuthors={[]}
                        course={this.state.course}
                        errors={this.state.errors}
                        />

        )
    }
}

ManageCoursePage.PropTypes = {
    course : PropTypes.object.isRequired
}

ManageCoursePage.defaultProps = defaultProps

function mapStateToProps(state, ownProps) {
    let course = {id:'', watchHref:'', title:'', authorId:'', length:'', category:''};
    return {
        course:course
    }
}


function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)
