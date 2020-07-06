import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

function CourseForm(props) {
  const {
    course,
    onSave,
    authors,
    errors = {},
    onChange,
    saving = false,
  } = props;

  return (
    <form onSubmit={onSave}>
      <h2>{course.id ? "Edit " : "Add "}Course</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        value={course.title || ""}
        onChange={onChange}
        error={errors.title}
      />
      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId || ""}
        defaultOption="Select Author"
        options={authors.map((author) => ({
          text: author.name,
          value: author.id,
        }))}
        onChange={onChange}
        error={errors.author}
      ></SelectInput>
      <TextInput
        label="category"
        name="category"
        value={course.category || ""}
        onChange={onChange}
        error={errors.category}
      ></TextInput>
      <button type="submit" className="btn btn-primary" disabled={saving}>
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
}

CourseForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  errors: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default CourseForm;
