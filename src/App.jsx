import React, { useState } from 'react';
import quizData from './quizData'; // Ensure the path is correct

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0); // Track the current question index
  const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(null)); // Store user answers
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if the quiz is submitted
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track selected answer for the current question

  const handleAnswerChange = (points) => {
    setSelectedAnswer(points); // Track the selected answer's points
  };

  const handleNextQuestion = () => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = selectedAnswer;
    setUserAnswers(updatedAnswers);
    setSelectedAnswer(null); // Reset the selected answer for the next question

    // Move to the next question
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsSubmitted(true); // End quiz if it was the last question
    }
  };

  const totalPoints = userAnswers.reduce((acc, curr) => acc + (curr || 0), 0); // Calculate total points
  const totalPossiblePoints = quizData.reduce((acc, curr) => acc + Math.max(...curr.answers.map(a => a.points)), 0); // Calculate max possible points

  return (
    <div>
      {!isSubmitted ? (
        <>
          <div key={currentQuestion}>
            <h3>{quizData[currentQuestion].question}</h3>
            <ul>
              {quizData[currentQuestion].answers.map((answer, answerIndex) => (
                <li key={answerIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${currentQuestion}`}
                      value={answer.points}
                      onChange={() => handleAnswerChange(answer.points)}
                      checked={selectedAnswer === answer.points}
                    />
                    {answer.answer} {/* Only the answer text is displayed */}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {selectedAnswer !== null && (
            <button onClick={handleNextQuestion}>
              {currentQuestion === quizData.length - 1 ? "Submit Quiz" : "Next Question"}
            </button>
          )}
        </>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <h3>Total Points: {totalPoints} out of {totalPossiblePoints} points.</h3>
        </div>
      )}
    </div>
  );
};

export default Quiz;
