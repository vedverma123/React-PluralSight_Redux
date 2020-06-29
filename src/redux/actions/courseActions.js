import * as courseApi from "../../api/courseApi";
import * as actionTypes from "../actions/actionTypes";

export function createCourse(course) {
  return { type: actionTypes.CREATE_COURSE, course };
}

export function loadCourseSuccess(courses) {
  return { type: actionTypes.LOAD_COURSE_SUCCESS, courses };
}

export function loadCourses() {
  return function (dispatch) {
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}
