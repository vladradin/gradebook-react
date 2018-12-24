import { Reducer, AnyAction } from "redux";
import TeacherState from "../Model/TeacherState";

var initialState: TeacherState = {};

const teacherReducer: Reducer<TeacherState, AnyAction> = function (state: TeacherState = initialState, action: AnyAction): TeacherState {
    switch (action.type) {
        default:
            return state || undefined;
    }
}

export default teacherReducer;