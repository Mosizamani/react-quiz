import React from 'react';
import quizData from './quizData'; // Make sure the path matches your folder structure

const Quiz = () => {
  return (
    <div>
      {quizData.map((item, index) => (
        <div key={index}>
          <h3>{item.question}</h3>
          <ul>
            {item.answers.map((answer, i) => (
              <li key={i}>{answer.answer} - {answer.points} points</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Quiz;
