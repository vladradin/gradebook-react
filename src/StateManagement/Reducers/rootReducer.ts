import { combineReducers, Action, ReducersMapObject } from "redux";

import teachersReducer from './teacherReducer';
import studentsReducer from './studentReducer';
import coursesReducer from './courseReducer';

const combinedReducer = combineReducers({
    teachers: teachersReducer,
    students: studentsReducer,
    courses: coursesReducer
});

export default combinedReducer;