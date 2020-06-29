import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

function ManageCoursePage(props) {
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

  return (
    <>
      <h2>Manage Course</h2>
    </>
  );
}

ManageCoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  actionCourses: PropTypes.object.isRequired,
  actionAuthors: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
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
