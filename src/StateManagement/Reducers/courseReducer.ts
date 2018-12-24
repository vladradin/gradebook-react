import { Action } from "redux";
import CourseState from "../Model/CourseState";

const initialState: CourseState = {};

export default function (state: CourseState = initialState, action: Action): CourseState {
    switch (action.type) {
        default:
            return state;
    }
}