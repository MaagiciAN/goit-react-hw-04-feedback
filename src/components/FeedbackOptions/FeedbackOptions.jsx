import React from "react";
import css from "./FeedbackOptions.module.css"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <>
      <button
        key={option}
        type="button"
        name={option}
        onClick={onLeaveFeedback}
        className={css.btn}
      >
        {option}
      </button>
    </>
  ));
};