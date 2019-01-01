import { Action } from "redux";

import Teacher from "../../Models/Teacher";

export const LOAD_TEACHERS = "Load Teachers";
export const LOADED_TEACHERS_SUCCESSFULL = "Teachers Load Succesfully";
export const LOADED_TEACHERS_FAILED = "Teachers Load Failed";

export const NEW_TEACHER = "New Teacher";
export const REMOVE_TEACHER = "Remove Teacher";
export const UPDATE_TEACHER = "Update Teacher";

export class LoadTeachers implements Action {
    readonly type = LOAD_TEACHERS;
}

export class LoadTeachersSuccesfull implements Action {
    readonly type = LOADED_TEACHERS_SUCCESSFULL;
    readonly teachers: Teacher[];

    constructor(teachers: Teacher[]) {
        this.teachers = teachers;
    }
    static Create(teachers: Teacher[]): LoadTeachersSuccesfull {
        return Object.assign({}, new LoadTeachersSuccesfull(teachers));
    }
}

export class LoadTeachersFailed implements Action {
    readonly type = LOADED_TEACHERS_FAILED;
    readonly errorMessage: string;
    constructor(errorMessage: string) {
        this.errorMessage = errorMessage;
    }
}

export class NewTeacher implements Action {
    readonly type = NEW_TEACHER;
    readonly teacher: Teacher;
    constructor(teacher: Teacher) {
        this.teacher = teacher;
    }
}

export class RemoveTeacher implements Action {
    readonly type = REMOVE_TEACHER;
    readonly teacherId: string;

    constructor(teacherId: string) {
        this.teacherId = teacherId;
    }
}

export class UpdateTeacher implements Action {
    readonly type = UPDATE_TEACHER;
    readonly teacherId: string;
    readonly updatedTeacher: Teacher;

    constructor(teacherId: string, updatedTeacher: Teacher) {
        this.teacherId = teacherId;
        this.updatedTeacher = updatedTeacher;
    }
}

export type TeacherActions = LoadTeachers | LoadTeachersFailed | LoadTeachersSuccesfull |
    NewTeacher | RemoveTeacher;
