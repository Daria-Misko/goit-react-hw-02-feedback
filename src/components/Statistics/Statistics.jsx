import React from 'react';
import { FeedBack } from './Statistics.styled';

export default function Statistics({
  good,
  bad,
  neutral,
  positivePercentage,
  total,
  title,
}) {
  return (
    <section>
      <h2>{title}</h2>
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
