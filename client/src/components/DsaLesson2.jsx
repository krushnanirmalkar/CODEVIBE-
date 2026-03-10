import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Compiler from './Compiler';

const DSALesson2 = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  const handleSuccess = () => setIsCorrect(true);
  const goToNextLesson = () => navigate('/DSALesson3');

  return (
    <div className="lesson">
      <h1 className="lesson-title">Chapter 2: Time & Space Complexity (JS)</h1>

      <div className="lesson-content">
        <p>
          <strong>Time Complexity:</strong> Tells how the runtime of an algorithm increases as input size grows.
        </p>
        <p>
          <strong>Space Complexity:</strong> Tells how much memory an algorithm uses relative to input size.
        </p>
        <p>Common Big O notations:</p>
        <ul>
          <li>O(1) – Constant time</li>
          <li>O(n) – Linear time</li>
          <li>O(n²) – Quadratic time</li>
        </ul>
        <p>Example in JS: Sum of first N numbers using a loop</p>
        <pre>
{`let n = 5;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum); // prints 15`}
        </pre>
      </div>

      <pre className="instructions">
{`Task:
1. Write a JavaScript program to calculate the sum of first 5 numbers using a loop.
2. Print the sum.`}
      </pre>

      <Compiler
        LessonId="dsa-lesson-2"
        language="js"
        initialCode={`// Hello from CodeVibe
console.log("Hello from CodeVibe");`}
        expectedOutput={(output) => {
          // Check if user printed 15
          return output.trim() === "15";
        }}
        onSuccess={handleSuccess}
      />

      {isCorrect && (
        <Link
          to="/DSALesson3"
          style={{ marginTop: '20px', display: 'inline-block', fontWeight: 'bold' }}
          onClick={goToNextLesson}
        >
          ⏭ NEXT LESSON
        </Link>
      )}
    </div>
  );
};

export default DSALesson2;
