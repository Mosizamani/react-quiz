const quizData = [
    {
      question: "What are some common uses of Node.js in modern web development?",
      answers: [
        { answer: "Handling large-scale data streaming applications (e.g., video streaming)", points: 5 },
        { answer: "Creating RESTful APIs for web applications", points: 2 },
        { answer: "Building simple static file servers", points: 1 },
        { answer: "Implementing real-time applications with WebSockets", points: 3 }
      ]
    },
    {
      question: "How can you handle different HTTP methods in an Express app?",
      answers: [
        { answer: "Using `app.get()` to handle GET requests", points: 1 },
        { answer: "Using `app.all()` to handle all HTTP methods for a specific route", points: 5 },
        { answer: "Using `app.put()` to update existing resources", points: 3 },
        { answer: "Using `app.post()` to handle POST requests", points: 2 }
      ]
    },
    {
      question: "What are some common ways to manage state in a React component?",
      answers: [
        { answer: "Using the `useReducer` hook for more complex state logic", points: 3 },
        { answer: "Managing global state with Context API or Redux", points: 5 },
        { answer: "Using the `useState` hook for simple state management", points: 1 },
        { answer: "Passing state between parent and child components via props", points: 2 }
      ]
    },
    {
      question: "What are different ways to query data from a MongoDB collection using Mongoose?",
      answers: [
        { answer: "Using `aggregate()` to perform advanced data aggregation and manipulation", points: 3 },
        { answer: "Using `find()` to retrieve all documents in a collection", points: 1 },
        { answer: "Using text indexes for efficient full-text search within documents", points: 5 },
        { answer: "Using `findById()` to retrieve a specific document by its ID", points: 2 }
      ]
    },
    {
      question: "How can you optimize the performance of a full-stack app using Node.js, Express, React, and MongoDB?",
      answers: [
        { answer: "Using `useMemo` in React to prevent unnecessary re-renders", points: 2 },
        { answer: "Implementing server-side caching for frequently requested data", points: 1 },
        { answer: "Implementing server-side rendering (SSR) with React for faster initial page loads", points: 5 },
        { answer: "Optimizing MongoDB queries with indexes and projection", points: 3 }
      ]
    }
  ];
  
  export default quizData;
  