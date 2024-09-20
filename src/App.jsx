import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)



  const questions = [
    {
      question: 'What is the capital of Iran?',
      options: ['Baqdad', 'Tehran', 'Calgary', 'Rome'],
      answer: 'Tehran'
    },
    {
      question: 'What is the capital of Spain?',
      options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
      answer: 'Madrid'
    },
    {
      question: 'What is the capital of Germany?',
      options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
      answer: 'Berlin'
    },
    {
      question: 'What is the capital of Italy?',
      options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
      answer: 'Rome'
    }
  ]

  return (
    <>
      <h1>Welcome to my </h1>
    </>
  )
}

export default App
