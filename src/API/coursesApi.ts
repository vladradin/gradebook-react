import Course from "../Models/Course";
import axios from 'axios';
import * as apiUrls from "./apiUrls";

class CoursesApi {
    getAllCourses(): Promise<Course[]> {
        return axios.get<Course[]>(apiUrls.courses).then(response => response.data);
    }
}

var module = new CoursesApi();
export { module as coursesApi };