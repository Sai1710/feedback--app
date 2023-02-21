import React from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useState } from "react";
import Card from "./shared/Card.js";
import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "./Context/FeedbackContext.js";
function FeedbackItem({ item }) {
  // const [rating, setRating] = useState(7);

  // const handleClick = () => {
  //   setRating((prev) => {
  //     return prev + 1;
  //   });
  // };
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  const handleClick = function (id) {
    // console.log(id);
  };
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
