import * as React from 'react';
import Course from '../../../Models/Course';
import { connect } from 'react-redux';

import { ifElse } from 'ramda';
import { mapCoursesToProps, mapDispatchToCourses } from './CoursePageMapping';
import { notEmpty } from '../../../Models/HelperFunciton';



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

    createCourseElements = ifElse(notEmpty,
        this.mapCourseToElements,
        this.noCourseElement);

    render() {
        const { courses } = this.props;

        return (
            <div>
                {this.createCourseElements(courses)}
            </div>
        );
    }
}



export default connect(mapCoursesToProps, mapDispatchToCourses)(CoursesPage);