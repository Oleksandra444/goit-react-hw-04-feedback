import { Component } from "react";
import { SectionTitle } from "./SectionTitle/SectionTitle";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistic } from "./Statistic/Statistic";
import { NotificationMessage } from "./NotificationMessage/NotificationMessage";
import background from "../images/bcg-1.jpg";
import { GlobalStyle } from "./GlobalStyle";
// import styled from "styled-components";

export class App extends Component  {
  state = { 
  good: 0,
  neutral: 0,
  bad: 0
  }

  onLeaveFeedback = ({ target: { name } }) => {this.setState(prevState => ({
      [name]: prevState[name] + 1,
  }));
  };
  
  onCountTotalFeedback = () => { return Object.values(this.state).reduce((total, curr) => (total + curr))};

  onCountPercentageFeedback = totalFeedback => {
    const { good, neutral } = this.state;

    if (totalFeedback > 0) return Math.round(((good + neutral) / totalFeedback) * 100);
    return 0;
  };

  
    render() 
    
    {
      const totalFeedback = this.onCountTotalFeedback();
      const positiveFeedback = this.onCountPercentageFeedback(totalFeedback);


    return (
      <div style={{ display: 'flex' }}>
        <div style={{ width: '20%', height: '100vh',  }}>
          <header style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', }}></header>
        </div>
        <div style={{ width: '60%', textAlign: 'center', }}>
        <SectionTitle title='Please leave feedback'>
          <FeedbackOptions options={ Object.keys(this.state)}  onLeaveFeedback={this.onLeaveFeedback}/>
        </SectionTitle>
          <SectionTitle title='Statistics'> {totalFeedback ? <Statistic options={Object.entries(this.state)} total={totalFeedback} positivePercentage={positiveFeedback} /> : <NotificationMessage />} </SectionTitle>
        </div>
        <div style={{ width: '20%', height: '100vh',  }}>
          <footer style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', }}></footer>
        </div>
        <GlobalStyle/>
      </div>
    );
  }
};
