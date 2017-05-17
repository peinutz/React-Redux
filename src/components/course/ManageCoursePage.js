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
                        allAuthors={this.props.authors}
                        course={this.state.course}
                        errors={this.state.errors}
                        />

        )
    }
}

ManageCoursePage.propTypes = {
    course : PropTypes.object.isRequired,
    authors : PropTypes.array.isRequired
}

ManageCoursePage.defaultProps = defaultProps

function mapStateToProps(state, ownProps) {
    
    let course = {id:'', watchHref:'', title:'', authorId:'', length:'', category:''};
    debugger;

    const authorsFormattedForDropdown = state.authors.map(author => {
        debugger;
        return {
            value: author.id,
            text: author.firstName + '' + author.lastName
        }
    })

    return {
        course:course,
        authors: authorsFormattedForDropdown
    }
}


function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators(courseActions, dispatch)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)
