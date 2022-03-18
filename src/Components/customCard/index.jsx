import React, { useCallback } from "react";
import CustomModal from "Components/customModal";
import * as actionCreators from "store/actionCreators";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import usePageFixed from "Hooks/usePageFixed.jsx";
import "./style.scss";

function CustomCard(props) {
  const { title, className, hasButton, style } = props;

  usePageFixed();

  const closeModal = useCallback(() => {
    const { currentModalName, changeCurrentModal } = props;
    if (
      currentModalName === "rulesDescription" &&
      !localStorage.getItem("initCard")
    )
      localStorage.setItem("initCard", true);
    changeCurrentModal({ currentModalName: "" });
  }, [props]);
  return (
    <div style={style}>
      <CustomModal closeModal={closeModal}>
        <div
          onClick={(event) => {
            event.stopPropagation();
          }}
          className={`customCard ${className ? `${className}` : ""}`}
        >
          <div className="customCard_content">{props.children}</div>
          {hasButton ? (
            <div className="customCard_centain" onClick={closeModal}></div>
          ) : null}
        </div>
      </CustomModal>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrentModal: function (data) {
      dispatch(actionCreators.changeCurrentModal(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(CustomCard);

CustomCard.propTypes = {
  className: PropTypes.string,
  hasButton: PropTypes.bool,
  currentModalName:PropTypes.string.isRequired
};
CustomCard.defaultProps = {
  className:''
};
