import React from 'react';
import { Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export default function Feedback({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => {
        return (
          <Button
            type="button"
            key={option}
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </Button>
        );
      })}
    </div>
  );
}

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
