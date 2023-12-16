import { Component } from "react";
import { Section } from './Section/Section'
import { Statistics } from './Statistics/Statistics'
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleLeaveFeedback = event => {
    this.setState(prevState => ({
      [event.target.textContent]: prevState[event.target.textContent] + 1,
    }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };
  render() {
    const { good, bad, neutral } = this.state;
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleLeaveFeedback}
        />
        <Statistics
          state={this.state}
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positiveFeedback={
            this.countTotalFeedback()
              ? this.countPositiveFeedbackPercentage()
              : 0
          }
        />
      </Section>
    );
  }
}