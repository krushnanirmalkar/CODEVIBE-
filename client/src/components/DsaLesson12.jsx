import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Compiler from './Compiler';

const DSALesson1 = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [output, setOutput] = useState("");
  const navigate = useNavigate();

  const handleRun = (userCode) => {
    // simulate JS code run
    try {
      // eslint-disable-next-line no-eval
      const result = eval(userCode);
      setOutput(result || "Welcome to DSA"); // simulate if console.log not returned
      if (result === undefined || result === "Welcome to DSA") {
        setIsCorrect(true);
      }
    } catch (err) {
      setOutput(err.message);
    }
  };

  const goToNextLesson = () => navigate('/DSALesson2');

  return (
    <div className="lesson">
      <h1 className="lesson-title">Chapter 1: Introduction to Data Structures & Algorithms</h1>

      <div className="lesson-content">
        <p>
          Data Structures are **ways to organize and store data** so that it can be used efficiently. 
          Algorithms are **step-by-step instructions** for solving a problem using those data structures.
        </p>

        <p>
          Examples of Data Structures: <b>Array, Linked List, Stack, Queue, Tree, Graph</b>.<br/>
          Examples of Algorithms: <b>Searching, Sorting, Recursion</b>.
        </p>

        <p>
          Why we learn this: Without organizing data properly, your programs will be slow or inefficient. Understanding both theory and practice is key to becoming a solid programmer.
        </p>
      </div>

      <pre className="instructions">
{`Task:
1. Write a simple program to print "Welcome to DSA" using JavaScript.`}
      </pre>

      <Compiler
        LessonId="dsa-lesson-1"
        language="js"
        initialCode={`// Write your code here
console.log("Welcome to DSA");`}
        runCode={handleRun}
      />

      {output && (
        <div className="output">
          <strong>Output:</strong>
          <pre>{output}</pre>
        </div>
      )}

      {isCorrect && (
        <Link to="/DSALesson2" className="next-lesson" onClick={goToNextLesson}>
          ⏭ NEXT LESSON
        </Link>
      )}
    </div>
  );
};

export default DSALesson1;
