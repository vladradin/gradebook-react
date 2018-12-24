import { Action } from "redux";
import StudentState from "../Model/StudentState";

const initialState: StudentState = {};

export default function (state: StudentState = initialState, action: Action): StudentState {
    switch (action.type) {
        default:
            return state;
    }
}