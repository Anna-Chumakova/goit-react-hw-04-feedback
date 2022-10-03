
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import { useState, useEffect } from 'react';


export default function Feedback () {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);


    const leaveFeedbackGood = () => {
        setGood(prevState => prevState + 1)
    }
    const leaveFeedbackNeutral = () => {
        setNeutral(prevState => prevState + 1)
    }
    const leaveFeedbackBad = () => {
        setBad(prevState => prevState + 1)
    }

    const countTotalFeedback = () => {
        return good + neutral + bad;
    }
    const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback();
        if (!total) {
            return 0;
        }
        const value = good;
        const result = (value / total) * 100;
        return Number(result.toFixed(2));
    }
    
    const total = countTotalFeedback();
    const goodPercent = countPositiveFeedbackPercentage();
    
    return (
            <div>
                <Section title='Please leave feedback'>
                <FeedbackOptions
                    leaveFeedbackGood={leaveFeedbackGood}
                    leaveFeedbackNeutral={leaveFeedbackNeutral}
                    leaveFeedbackBad={leaveFeedbackBad} />
                </Section>
                {!total? <Notification message='There is no feedback'></Notification> : <Section title='Statistics'>
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        goodPercent={goodPercent}    
                    />
                </Section>}   
            </div>)  
    
}

