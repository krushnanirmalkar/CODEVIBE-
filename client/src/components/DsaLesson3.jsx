import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Compiler from './Compiler';

const DSALesson3 = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  const handleSuccess = () => setIsCorrect(true);
  const goToNextLesson = () => navigate('/DSALesson4');

  return (
    <div className="lesson">
      <h1 className="lesson-title">Chapter 3: Arrays & Basic Operations (JS)</h1>

      <div className="lesson-content">
        <p>
          Arrays are collections of elements stored in contiguous memory locations.
        </p>
        <p>Common operations:</p>
        <ul>
          <li>Accessing elements</li>
          <li>Updating elements</li>
          <li>Traversing the array</li>
          <li>Finding sum or maximum/minimum</li>
        </ul>
        <p>Example in JS:</p>
        <pre>
{`// Hello from CodeVibe
function sumArray() {
  let arr = [1, 2, 3, 4, 5];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}

sumArray();
`}
        </pre>
      </div>

      <pre className="instructions">
{`Task:
1. Create a JavaScript array with numbers 1 to 5.
2. Print the sum of all elements.`}
      </pre>

      <Compiler
        LessonId="dsa-lesson-3"
        language="js"
        initialCode={`// Hello from CodeVibe
console.log("Hello from CodeVibe");`}
        expectedOutput={(output) => {
          // check if output is sum of 1+2+3+4+5 = 15
          return output.trim() === "15";
        }}
        onSuccess={handleSuccess}
      />

      {isCorrect && (
        <Link
          to="/DSALesson4"
          style={{ marginTop: '20px', display: 'inline-block', fontWeight: 'bold' }}
          onClick={goToNextLesson}
        >
          ⏭ NEXT LESSON
        </Link>
      )}
    </div>
  );
};

export default DSALesson3;
