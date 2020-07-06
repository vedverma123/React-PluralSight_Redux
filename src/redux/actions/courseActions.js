import * as courseApi from "../../api/courseApi";
import * as actionTypes from "../actions/actionTypes";

export function loadCourseSuccess(courses) {
  return { type: actionTypes.LOAD_COURSE_SUCCESS, courses };
}

export function updateCourseSuccess(courses) {
  return { type: actionTypes.UPDATE_COURSE_SUCCESS, courses };
}

export function createCourseSuccess(courses) {
  return { type: actionTypes.CREATE_COURSE_SUCCESS, courses };
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

export function saveCourse(course) {
  return function (dispatch, getState) {
    return courseApi
      .saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch((error) => {
        throw error;
      });
  };
}
