import { MapStateToProps, MapDispatchToProps, MapDispatchToPropsFunction } from "react-redux";
import { CoursesPageState, CoursesPageProps, CourseDispatchProps } from "./CoursesPage";
import CourseState from "../../../StateManagement/Model/CourseState";
import { Dispatch } from "react";
import { CourseActions, LoadCourses, NewCourse, RemoveCourse, LoadCoursesFailed, LoadCoursesSuccesfull } from "../../../StateManagement/Actions/courseActions";

import { coursesApi } from '../../../API/coursesApi';
import State from "../../../StateManagement/Model/State";

const mapCoursesToProps: MapStateToProps<CoursesPageState, CoursesPageProps, State> = (state) => {
    return {
        courses: state.courses.courses
    };
}

function LoadCourseFromApi() {
    return async (dispatch: Dispatch<LoadCoursesFailed | LoadCoursesSuccesfull>) => {
        const courses = await coursesApi.getAllCourses();
        return dispatch(LoadCoursesSuccesfull.Create(courses));
    }
}

const mapDispatchToCourses: MapDispatchToPropsFunction<CourseDispatchProps, CoursesPageProps> = (dispatch: Dispatch<CourseActions | any>, props: CoursesPageProps) => {
    return {
        loadCourses: () => dispatch(LoadCourseFromApi()),
        newCourse: course => dispatch(new NewCourse(course)),
        removeCourse: courseId => dispatch(new RemoveCourse(courseId))
    };
}

export { mapCoursesToProps, mapDispatchToCourses };