import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Compiler from './Compiler';

const DSALesson1 = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  const goToNextLesson = () => navigate('/DSALesson2');

  return (
    <div className="lesson">
      <h1 className="lesson-title">Chapter 1: Introduction to Data Structures & Algorithms</h1>

      <div className="lesson-content">
        <p>
          Data Structures are ways to store and organize data efficiently. Algorithms are step-by-step instructions to solve problems using these structures.
        </p>
        <p>
          Examples of data structures: Array, Linked List, Stack, Queue, Tree, Graph.<br />
          Examples of algorithms: Searching, Sorting, Recursion.
        </p>
      </div>

      <pre className="instructions">
{`Task:
1. Write a simple program to print "Welcome to DSA" using a JavaScript function.`}
      </pre>

      <Compiler
        LessonId="dsa-lesson-1"
        language="js"
        initialCode={`// Example: Hello from CodeVibe
function welcomeDSA() {
  console.log("Welcome to DSA");
}

// Call the function
welcomeDSA();`}
        expectedOutput={(output) => output.trim() === "Welcome to DSA"}
        onSuccess={() => setIsCorrect(true)}
      />

      {isCorrect && (
        <Link
          to="/DSALesson2"
          className="next-lesson"
          onClick={goToNextLesson}
        >
          ⏭ NEXT LESSON
        </Link>
      )}
    </div>
  );
};

export default DSALesson1;
