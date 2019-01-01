import Course from "../Models/Course";
import axios from 'axios';
import * as apiUrls from "./apiUrls";

var courses: Course[] = [
    { id: "3", name: "mate" },
    { id: "4", name: "chimie" },
    { id: "5", name: "bio" }
]

class CoursesApi {
    getAllCourses(): Promise<Course[]> {
        return axios.get<Course[]>(apiUrls.courses)
            .then(response => response.data)
            .catch(rsp => Promise.resolve(courses));
    }
}

var module = new CoursesApi();
export { module as coursesApi };