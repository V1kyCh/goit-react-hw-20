import { useState } from "react";

export const useFeedback = () => {
    const [good, setGood] = useState(0);
    const [bad, setBad] = useState(0);
    const [neutral, setNeutral] = useState(0);

    const total = good + neutral + bad;

    const countPositiveFeedbackPercentage = () => ((good / total) * 100).toFixed(2) + '%'

    const addOpinion = (e) => {

        switch (e.target.id) {
            case 'good':
                setGood(prev => prev + 1);
                break;
            case 'neutral':
                setNeutral(prev => prev + 1);
                break;
            case 'bad':
                setBad(prev => prev + 1);
                break;
            default:
                break;
        }
    }
    return { good, neutral, bad, total, countPositiveFeedbackPercentage, addOpinion }
}