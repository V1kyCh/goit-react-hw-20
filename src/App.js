import './App.css';

import { Statistics } from './components/Statistics';
import { Section } from './components/Section';
import { Notification } from './components/Notification';
import { FeedbackOptions } from './components/FeedbackOptions';

import { useFeedback } from './hooks/useFeedback';

function App() {

  const { good, neutral, bad, total, countPositiveFeedbackPercentage, addOpinion } = useFeedback()

  return (
    <div className="App">
      <Section title='Please leave feedback'>
        <FeedbackOptions addReview={addOpinion} />
      </Section>
      <Section title='Statistic'>
        {good === 0 && neutral === 0 && bad === 0 ?
          <Notification message="There is no feedback"></Notification> :
          <Statistics good={good} bad={bad} neutral={neutral} total={total} positivePercentage={countPositiveFeedbackPercentage} />
        }
      </Section>
    </div>
  );
}

export default App;