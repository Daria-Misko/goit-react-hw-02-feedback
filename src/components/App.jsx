import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import React, { Component } from 'react';
import Notification from './Notification/Notification';
import { Container } from './App.styled';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      handleFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={handleFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}
