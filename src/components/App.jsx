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

  // чому треба записувати саме так = () => ????
  handleFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor(
      (this.state.good * 100) /
        (this.state.good + this.state.bad + this.state.neutral)
    );
    // const total = (this.state.good + this.state.bad + this.state.neutral);
  };

  render() {
    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={
                this.countPositiveFeedbackPercentage()
                  ? this.countPositiveFeedbackPercentage()
                  : 0
              }
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}
