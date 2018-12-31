import { Action } from "redux";
import CourseState from "../Model/CourseState";
import { CourseActions, LOADED_COURSES_SUCCESSFULL, NEW_COURSE, REMOVE_COURSE } from "../Actions/courseActions";
import * as R from "ramda";
import Course from "../../Models/Course";

function addCourse(courses: Course[], courseToAdd: Course) {
    return R.prepend(courseToAdd, courses);
}

const initialState: CourseState = { courses: [] };

export default function (state: CourseState = initialState, action: CourseActions): CourseState {
    switch (action.type) {
        case LOADED_COURSES_SUCCESSFULL: {
            return {
                ...state,
                courses: action.courses
            };
        }
        case NEW_COURSE:
            return {
                ...state,
                courses: addCourse(state.courses, action.course)
            };
        case REMOVE_COURSE:
            return {
                ...state,
                courses: R.filter(course => course.id == action.courseId, state.courses)
            }

        default:
            return state;
    }
}