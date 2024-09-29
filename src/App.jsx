import React, { useState } from 'react';
import Form from './Form'; // Ensure the path is correct
import './styles.css'; // Import the CSS file with styles for the quiz
import Results from './Results'; // Import the CSS module with styles for the quiz
import './App.css'; // Import the CSS file with styles for the quiz
import styled from 'styled-components';
 
const App = () => {
  const [questionNumber, setQuestionNumber] = useState(0)
  const [score, setScore] = useState(0)
  
  const questions = [
    {
      questionText: "What are some common uses of Node.js in modern web development?",
      answers: [
        { answer: "Handling large-scale data streaming applications (e.g., video streaming)", points: 5 },
        { answer: "Creating RESTful APIs for web applications", points: 2 },
        { answer: "Building simple static file servers", points: 1 },
        { answer: "Implementing real-time applications with WebSockets", points: 3 }
      ]
    },
    {
      questionText: "How can you handle different HTTP methods in an Express app?",
      answers: [
        { answer: "Using `app.get()` to handle GET requests", points: 1 },
        { answer: "Using `app.all()` to handle all HTTP methods for a specific route", points: 5 },
        { answer: "Using `app.put()` to update existing resources", points: 3 },
        { answer: "Using `app.post()` to handle POST requests", points: 2 }
      ]
    },
    {
      questionText: "What are some common ways to manage state in a React component?",
      answers: [
        { answer: "Using the `useReducer` hook for more complex state logic", points: 3 },
        { answer: "Managing global state with Context API or Redux", points: 5 },
        { answer: "Using the `useState` hook for simple state management", points: 1 },
        { answer: "Passing state between parent and child components via props", points: 2 }
      ]
    },
    {
      questionText: "What are different ways to query data from a MongoDB collection using Mongoose?",
      answers: [
        { answer: "Using `aggregate()` to perform advanced data aggregation and manipulation", points: 3 },
        { answer: "Using `find()` to retrieve all documents in a collection", points: 1 },
        { answer: "Using text indexes for efficient full-text search within documents", points: 5 },
        { answer: "Using `findById()` to retrieve a specific document by its ID", points: 2 }
      ]
    },
    {
      questionText: "How can you optimize the performance of a full-stack app using Node.js, Express, React, and MongoDB?",
      answers: [
        { answer: "Using `useMemo` in React to prevent unnecessary re-renders", points: 2 },
        { answer: "Implementing server-side caching for frequently requested data", points: 1 },
        { answer: "Implementing server-side rendering (SSR) with React for faster initial page loads", points: 5 },
        { answer: "Optimizing MongoDB queries with indexes and projection", points: 3 }
      ]
    }
  ]  


    const [someStateValue, setSomeStateValue] = useState(true);
  
    // Define the style object
    const blueStyle = {
      color: someStateValue ? 'blue' : 'lightblue',
    }

    const PinkTitle = styled.h1`
    color: pink;`

  return (
    <>
      <PinkTitle>Hello everyone</PinkTitle>
      <h1 style={blueStyle}>Welcome to my quiz</h1>
      <button onClick={() => setSomeStateValue(!someStateValue)}>Toggle Color</button>

      {/* <h1 style={blueStyle}>Welcome to my quiz</h1> */}
      <p style={{ display: questionNumber > 0 ? 'none' : 'block' }}>Take the quiz to figure out!</p>
      {questionNumber >= questions.length ?
        <Results score={score}
          handleReset={() => {
            setQuestionNumber(0)
            setScore(0)
          }} />
        :
        <Form question={questions[questionNumber]} onSubmit={(additionalPoints) => {
          setScore(score + additionalPoints)
          setQuestionNumber(questionNumber + 1)
        }} />
      }
    </>
  )
}

export default App;
// const Quiz = () => {

//   const styling = {}

//   const [currentQuestion, setCurrentQuestion] = useState(0); // Track the current question index
//   const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(null)); // Store user answers
//   const [isSubmitted, setIsSubmitted] = useState(false); // Track if the quiz is submitted
//   const [selectedAnswer, setSelectedAnswer] = useState(null); // Track selected answer for the current question

//   const handleAnswerChange = (points) => {
//     setSelectedAnswer(points); // Track the selected answer's points
//   };

//   const handleNextQuestion = () => {
//     const updatedAnswers = [...userAnswers];
//     updatedAnswers[currentQuestion] = selectedAnswer;
//     setUserAnswers(updatedAnswers);
//     setSelectedAnswer(null); // Reset the selected answer for the next question

//     // Move to the next question
//     if (currentQuestion < quizData.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setIsSubmitted(true); // End quiz if it was the last question
//     }
//   };

//   const totalPoints = userAnswers.reduce((acc, curr) => acc + (curr || 0), 0); // Calculate total points
//   const totalPossiblePoints = quizData.reduce((acc, curr) => acc + Math.max(...curr.answers.map(a => a.points)), 0); // Calculate max possible points

//   return (
//     <div>
//       {!isSubmitted ? (
//         <>
//           <div className="quiz" key={currentQuestion}>
//             <h3 className="question">{quizData[currentQuestion].question}</h3>
//             <ul>
//               {quizData[currentQuestion].answers.map((answer, answerIndex) => (
//                 <li key={answerIndex}>
//                   <label>
//                     <input
//                       type="radio"
//                       name={`question-${currentQuestion}`}
//                       value={answer.points}
//                       onChange={() => handleAnswerChange(answer.points)}
//                       checked={selectedAnswer === answer.points}
//                     />
//                     {answer.answer} {/* Only the answer text is displayed */}
//                   </label>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {selectedAnswer !== null && (
//             <button className={styles.button} onClick={handleNextQuestion}>
//               {currentQuestion === quizData.length - 1 ? "Submit Quiz" : "Next Question"}
//             </button>
//           )}
//         </>
//       ) : (
//         <div>
//           <h2 className="">Quiz Completed!</h2>
//           <h3>Total Points: {totalPoints} out of {totalPossiblePoints} points.</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Quiz;
