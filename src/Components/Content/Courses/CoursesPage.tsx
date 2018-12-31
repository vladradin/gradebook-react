import * as React from 'react';
import { coursesApi } from '../../../API/coursesApi';
import Course from '../../../Models/Course';
import { connect, MapStateToPropsParam, MapStateToProps } from 'react-redux';

import { ifElse, isEmpty, not, compose } from 'ramda';
import { mapCoursesToProps, mapDispatchToCourses } from './CoursePageMapping'
import CourseState from '../../../StateManagement/Model/CourseState';

const notEmpty = compose(not, isEmpty);

export interface CourseDispatchProps {
    loadCourses(): void;
    newCourse(course: Course): void;
    removeCourse(courseid: string): void;
}

export interface CoursesPageProps extends CourseDispatchProps {
    courses: Course[];
}

export interface CoursesPageState {
    courses: Course[];
}

class CoursesPage extends React.Component<CoursesPageProps, CoursesPageState> {

    constructor(props: CoursesPageProps) {
        super(props);
        this.state = { courses: [] };
    }

    async componentDidMount() {
        this.props.loadCourses();
    }

    mapCourseToElements(courses: Course[]) {
        return courses.map(course => {
            return <p key={course.id}>{course.name}</p>
        })
    }

    noCourseElement() {
        return (<p className="bg-warning">No courses</p>);
    }

    render() {
        const { courses } = this.props;

        const mapCourseToElement = ifElse(notEmpty,
            this.mapCourseToElements,
            this.noCourseElement);

        return (
            <div>
                {mapCourseToElement(courses)}
            </div>
        );
    }
}



export default connect(mapCoursesToProps, mapDispatchToCourses)(CoursesPage);