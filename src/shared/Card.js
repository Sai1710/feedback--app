import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  // console.log(props);
  return (
    <div className={`card ${props.reverse && "reverse"}`}>{props.children}</div>
  );
}

Card.defaultProps = {
  reverse: false,
};

export default Card;
