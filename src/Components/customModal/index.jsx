import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

function Index(props) {
  return (
    <div
      className="customModal_wrapper"
      onClick={() => {
        props.closeModal();
      }}
    >
      {props.children}
    </div>
  );
}
export default Index;

Index.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children:PropTypes.element.isRequired
};
