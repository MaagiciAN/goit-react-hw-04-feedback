import React from 'react';
import css from './Statistics.module.css';
import { Notification } from '../Notification/Notification';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <>
      <h2 className={css.title}>Statistics</h2>

      {total ? (
        <>
          <p className={css.statistic}>Good:{good}</p>
          <p className={css.statistic}>Neutral:{neutral}</p>
          <p className={css.statistic}>Bad:{bad}</p>
          <p className={css.statistic}>Total:{total}</p>
          <p className={css.statistic}>
            Positive feedback: {positiveFeedback}%
          </p>
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};