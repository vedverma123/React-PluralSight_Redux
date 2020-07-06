import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseForm from "../course/CourseForm";
import newCourse from "../../../tools/mockData";

function ManageCoursePage(props) {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (props.courses.length === 0) {
      props.actionCourses.loadCourses().catch((error) => {
        console.log(error);
      });
    }

    if (props.authors.length === 0) {
      props.actionAuthors.loadAuthors().catch((error) => {
        console.log(error);
      });
    }
  });

  function handleChange(event) {
    const { name, value } = event.target;

    //below syntax is an example of Computed Property from ES6.
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.actionCourses.saveCourse(course);
  }

  return (
    <CourseForm
      course={course}
      errors={errors}
      authors={props.authors}
      onChange={handleChange}
      onSave={handleSubmit}
    />
  );
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  actionCourses: PropTypes.object.isRequired,
  actionAuthors: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    course: newCourse,
    courses: state.courses,
    authors: state.authors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionCourses: bindActionCreators(courseActions, dispatch),
    actionAuthors: bindActionCreators(authorActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
