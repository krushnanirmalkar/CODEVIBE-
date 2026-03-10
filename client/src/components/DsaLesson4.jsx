import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Compiler from './Compiler';

const DSALesson4 = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  const handleSuccess = () => setIsCorrect(true);
  const goToNextLesson = () => navigate('/DSALesson5');

  return (
    <div className="lesson">
      <h1 className="lesson-title">Chapter 4: Strings & Basic Manipulations</h1>

      <div className="lesson-content">
        <p>
          Strings are arrays of characters ending with a null character <code>'\0'</code>.
        </p>
        <p>Common operations:</p>
        <ul>
          <li>Input & output</li>
          <li>Length of string</li>
          <li>Concatenation</li>
          <li>Copying strings</li>
        </ul>
        <p>Example:</p>
        <pre>
{`char str[20];
scanf("%s", str);
printf("You entered: %s", str);`}
        </pre>
      </div>

      <pre className="instructions">
{`Task:
1. Write a C program to input a string.
2. Print its length using a loop.`}
      </pre>

      <Compiler
        LessonId="dsa-lesson-4"
        language="c"
        initialCode={`#include <stdio.h>

int main() {
    char str[50];
    // Write your code here
    return 0;
}`}
        expectedOutput={(output) => {
          // simple check: if output is a number (length > 0)
          return /^\d+$/.test(output.trim());
        }}
        onSuccess={handleSuccess}
      />

      {isCorrect && (
        <Link to="/DSALesson5" className="next-lesson" onClick={goToNextLesson}>
          ⏭ NEXT LESSON
        </Link>
      )}
    </div>
  );
};

export default DSALesson4;
