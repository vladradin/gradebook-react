import TeacherState from "./TeacherState";
import StudentState from "./StudentState";
import CourseState from "./CourseState";

export default interface State {
    teachers: TeacherState,
    students: StudentState,
    courses: CourseState
};