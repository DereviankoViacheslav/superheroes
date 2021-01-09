import React, { useState, useRef } from "react";
import "./Form.css";

const Form = ({ initialData, sendData }) => {
  const [formData, setFormData] = useState(() => {
    const { ...data } = initialData;
    return data;
  });
  const inputFile = useRef(null);

  const onChangeValue = (e) => {
    let { name, value, type } = e.target;
    value = type === "file" ? inputFile.current.files : value;
    setFormData({ ...formData, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    sendData({ ...formData });
    // const emptyFields = Object.keys(formData).reduce((acc, field) => {
    //   return { ...acc, [field]: "" };
    // }, {});
    // emptyFields.images = [];
    // setFormData(emptyFields);
  };

  const formFields = Object.keys(formData).map((name) => {
    const atrs = {
      name,
      type: "text",
      onChange: onChangeValue,
    };

    let inputField = null;

    if (name === "origin_description" || name === "catch_phrase") {
      inputField = <textarea {...atrs} defaultValue={formData[name]} />;
    } else if (name === "images") {
      inputField = (
        <input {...atrs} type="file" multiple={true} ref={inputFile} />
      );
    } else {
      inputField = <input {...atrs} defaultValue={formData[name]} />;
    }

    return (
      <label key={name}>
        {name[0].toUpperCase() + name.slice(1).replace("_", " ")}
        {inputField}
      </label>
    );
  });

  return (
    <form onSubmit={formSubmit} className="create-hero__form">
      {formFields}
      <button type="submit" className="create-hero__btn">
        create hero
      </button>
    </form>
  );
};

export default Form;
