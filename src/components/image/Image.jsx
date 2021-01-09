import React from "react";
import PropTypes from "prop-types";
import "./Image.css";

const Image = ({ src, alt }) => {
  return <img className="img" src={src} alt={alt} />;
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};

Image.defaultProps = {
  src: "https://via.placeholder.com/250x150",
  alt: "Image name"
};

export default Image;
