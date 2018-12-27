import Course from "../Models/Course";

class CoursesApi {
    getAllCourses(): Promise<Course[]> {
        return new Promise((resolver, rejecter) => {
            return resolver([
                { Id: "3", Version: 1, Name: "Matematica" },
                { Id: "4", Version: 1, Name: "Romana" },
                { Id: "5", Version: 1, Name: "Chimie" },
            ]);
        })
    }
}

export { CoursesApi };