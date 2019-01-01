import { Action } from "redux";
import Course from "../../Models/Course";
import { object } from "prop-types";
import { createPlainObject } from "../../Models/HelperFunciton";

export const LOAD_COURSES = "Load Courses";
export const LOADED_COURSES_SUCCESSFULL = "Courses Load Succesfully";
export const LOAD_COURSES_FAILED = "Courses Load Failed";

export const NEW_COURSE = "New Course";
export const REMOVE_COURSE = "Remove Course";
export const UPDATE_COURSE = "Update Course";

export class LoadCourses implements Action {
    readonly type = LOAD_COURSES;
}

export class LoadCoursesSuccesfull implements Action {
    readonly type = LOADED_COURSES_SUCCESSFULL;
    readonly courses: Course[];

    constructor(courses: Course[]) {
        this.courses = courses;
    }
    static Create = (courses: Course[]) => createPlainObject(LoadCoursesSuccesfull, courses);
}

export class LoadCoursesFailed implements Action {
    readonly type = LOAD_COURSES_FAILED;
    readonly errorMessage: string;

    constructor(errorMessage: string) {
        this.errorMessage = errorMessage;
    }

    static Create = (errorMessage: string) => createPlainObject(LoadCoursesFailed, errorMessage);
}

export class NewCourse implements Action {
    readonly type = NEW_COURSE;
    readonly course: Course;

    constructor(course: Course) {
        this.course = course;
    }

    static Create = (course: Course) => createPlainObject(NewCourse, course);
}

export class RemoveCourse implements Action {
    readonly type = REMOVE_COURSE;
    readonly courseId: string;

    constructor(courseId: string) {
        this.courseId = courseId;
    }

    static Create = (courseId: string) => createPlainObject(RemoveCourse, courseId);
}

export type CourseActions = LoadCourses | LoadCoursesFailed | LoadCoursesSuccesfull |
    NewCourse | RemoveCourse;
