import { useState } from 'react'
import React from 'react'
import './App.css'


export default function App() {
  //Properties

  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "What is the capital of Nigeria?",
      options: [
        { id: 0, text: "Bayelsa", isCorrect: false },
        { id: 1, text: "Lagos", isCorrect: false },
        { id: 2, text: "Kaduna", isCorrect: false },
        { id: 3, text: "Abuja", isCorrect: true },
      ],
    },
    {
      text: "What year did the Corona Virus pandemic break out in Nigeria?",
      options: [
        { id: 0, text: "2020", isCorrect: true },
        { id: 1, text: "2019", isCorrect: false },
        { id: 2, text: "2022", isCorrect: false },
        { id: 3, text: "2021", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is the highest selling mobile phone?",
      options: [
        { id: 0, text: "iPhone", isCorrect: true },
        { id: 1, text: "Nokia", isCorrect: false },
        { id: 2, text: "Samsung", isCorrect: false },
        { id: 3, text: "Tecno", isCorrect: false },
      ],
    },
    {
      text: "What is the most populous state in Nigeria?",
      options: [
        { id: 0, text: "Abuja", isCorrect: false },
        { id: 1, text: "Lagos", isCorrect: true },
        { id: 2, text: "Rivers", isCorrect: false },
        { id: 3, text: "Kano", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries do not border Nigeria?",
      options: [
        { id: 0, text: "Benin Republic", isCorrect: false },
        { id: 1, text: "South Africa", isCorrect: true },
        { id: 2, text: "Cameroon", isCorrect: true },
        { id: 3, text: "Ghana", isCorrect: false },
      ],
    },
  ];

  const optionClicked= (isCorrect) => {
    if(isCorrect) {
      setScore(score + 1);
    }

    if(currentQuestion + 1 < questions.length){
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }

   

    
  }
  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  }
  return (
    
    <div className='App'>
      {/* 1. Header */}
      <h1>Nigeria General knowledge Quiz</h1>

      {/* 2. Current score */}
      <h2>Current score: {score}</h2>

      {showFinalResults ? (
        /* 4. Final Results */ 
        < div className='final-results'>
      <h1>Final Results</h1>
      <h2>
        {score} out of {questions.length} -  ({(score/questions.length) * 100}%)
      </h2>
      <button onClick={() => restartQuiz()}>Restart Quiz</button>
       </div>) 
       : (
        /* 3. Question card */ 
      < div className = 'question-card' >
        <h2>{currentQuestion + 1} out of {questions.length}</h2>
        <h3 className='question-text'>{questions[currentQuestion].text}</h3>
        <ul>
          {questions[currentQuestion].options.map((option) =>{ 
          return (
            <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
          )}
          )}
        </ul> 
      </div >)

  }

     
     
    </div >
  )
}
