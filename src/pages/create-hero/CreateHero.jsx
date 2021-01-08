import React, { useState, useRef } from "react";
import "./CreateHero.css";

const CreateHero = () => {
  const [formData, setFormData] = useState({
    nickname: "",
    real_name: "",
    superpowers: "",
    origin_description: "",
    catch_phrase: "",
    images: [],
  });

  const inputFile = useRef(null);

  const onChangeValue = (e) => {
    let { name, value, type } = e.target;
    value = type === "file" ? inputFile.current.files : value;
    setFormData({ ...formData, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };

  const formFields = Object.keys(formData).map((name) => {
    const atrs = {
      name,
      type: name === "images" ? "file" : "text",
      multiple: name === "images",
      ref: name === "images" ? inputFile : null,
      onChange: onChangeValue,
    };

    return (
      <label key={name}>
        {name[0].toUpperCase() + name.slice(1).replace("_", " ")}
        {name === "origin_description" || name === "catch_phrase" ? (
          <textarea {...atrs} />
        ) : (
          <input {...atrs} ref={name === "images" ? inputFile : null} />
        )}
      </label>
    );
  });

  return (
    <div className="create-hero">
      <h2>Create Hero</h2>
      <form onSubmit={formSubmit} className="create-hero__form">
        {formFields}
        <button className="create-hero__btn">create hero</button>
      </form>
    </div>
  );
};

export default CreateHero;
