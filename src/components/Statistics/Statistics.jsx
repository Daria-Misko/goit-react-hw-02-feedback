import React from 'react';
import { FeedBack } from './Statistics.styled';
import PropTypes from 'prop-types';

export default function Statistics({
  good,
  bad,
  neutral,
  positivePercentage,
  total,
}) {
  return (
    <section>
      <div>
        <FeedBack>Good: {good}</FeedBack>
        <FeedBack>Neutral: {neutral}</FeedBack>
        <FeedBack>Bad: {bad}</FeedBack>
        <FeedBack>Total: {total}</FeedBack>
        <FeedBack>Positive feedback: {positivePercentage}%</FeedBack>
      </div>
    </section>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
