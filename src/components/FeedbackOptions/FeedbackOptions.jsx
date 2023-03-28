import React from 'react';
import { Button } from './FeedbackOptions.styled';

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
