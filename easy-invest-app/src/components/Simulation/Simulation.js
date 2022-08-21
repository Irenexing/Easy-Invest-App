import React from "react";
import {Link} from "react-router-dom";
import "./Simulation.scss";
// import ProgressBar from 'react-bootstrap/ProgressBar';

function QuizButton(props) {
// Just a button that displays text passed to it via props.value
    return (
      <button
        className="quiz-button"
        onClick={props.onClick}>
        { props.value }
      </button>
    )

}



class Simulation extends React.Component {
// Main object for displaying the simulation pages. 
// Functions were used for primary displaying other pages, idk whats a better choice

  state = {
    answer: "",
    hint: "",
  };

  renderPromptButton(question, answer, correctFlag) {
    // simple function to run the quiz buttons and popup answers 

    return (
      <QuizButton
        value = {question}
        onClick = {() => this.setState({answer: answer}) }
      />
    );
  }

  renderHintButton(question, hint) {
    // copy of above, its a dumb solution but i can't figure out how to reuse the code lol
    return (
      <QuizButton
        value = {question}
        onClick = {() => this.setState({hint: hint}) }
      />
    );
  }

  renderPromptAnswer() {
    return(
      this.state.answer
    );
  }

  renderPromptHint(id) {
    // same copy as above, can't figure out how to reuse the code atm 
    return(
      this.state.hint
    );
  }

  render() {
    return (
  
      <div className="simulation">
        {/* <ProgressBar now={now} visuallyHidden /> */}

        <h1 className="simulation-question"> You have $50 extra each month. Which method is better for long term investing? <br></br> </h1>
       
        {this.renderPromptButton("Invest $50 or less each month", "Good idea!", 0)}
        {this.renderPromptButton("Invest in multiple stocks at once", "Are you sure?", 1)}
        {this.renderPromptButton("Don't invest at all and save", "You didn't watch the video, did you?", 1)}
  
        <br></br>

        {this.renderPromptAnswer()}
        <br></br>
        {this.renderHintButton("Need a hint?", "Don't invest more money than you can spare!")}
        <br></br>
        {this.renderPromptHint()}
        <br></br>
        <div className="button-bottom">
        <Link to="/module11"> <button className="module__button"> Back to Lesson </button> </Link>
        <Link to="/Simulation1"> <button className="module__button"> Continue </button> </Link>
        </div>
      </div>
      
    );
  }
}

  export default Simulation;