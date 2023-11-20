import { useState } from "react";
import { SectionTitle } from "./SectionTitle/SectionTitle";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistic } from "./Statistic/Statistic";
import { NotificationMessage } from "./NotificationMessage/NotificationMessage";
import background from "../images/bcg-1.jpg";
import { GlobalStyle } from "./GlobalStyle";
// import styled from "styled-components";

export const App = () => { 

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = ({ target: { name } }) => {
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
     } 
}

  const onCountTotalFeedback = () => good + neutral + bad;

  const onCountPercentageFeedback = totalFeedback => {
        if (totalFeedback > 0) return Math.round(((good) / totalFeedback) * 100);
    return 0;
  };

  const totalFeedback = onCountTotalFeedback();
  
  const positiveFeedback = onCountPercentageFeedback(totalFeedback);

  const optionsName = ['good', 'neutral', 'bad'];

  
  
  return (
      <div style={{ display: 'flex' }}>
        <div style={{ width: '20%', height: '100vh',  }}>
          <header style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', }}></header>
        </div>
        <div style={{ width: '60%', textAlign: 'center', }}>
        <SectionTitle title='Please leave feedback'>
          <FeedbackOptions options={optionsName}  onLeaveFeedback={onLeaveFeedback}/>
        </SectionTitle>
        <SectionTitle title='Statistics'> {totalFeedback ? <Statistic good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positiveFeedback} /> : <NotificationMessage />} </SectionTitle>
        </div>
        <div style={{ width: '20%', height: '100vh',  }}>
          <footer style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', }}></footer>
        </div>
        <GlobalStyle/>
      </div>
    );




}





