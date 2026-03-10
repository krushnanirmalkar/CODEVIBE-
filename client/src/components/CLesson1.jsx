// src/components/CLesson1.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Compiler from './Compiler';

const CLesson1 = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  const handleSuccess = () => {
    setIsCorrect(true);
  };

  const goToNextLesson = () => {
    navigate('/c/lesson2');
  };

  return (
    <div className="lesson">
      <h1 className="lesson-title">Chapter 1: Introduction to C</h1>

      <div className="lesson-content">
        <p>
          C is one of the most powerful and widely-used programming languages, created by Dennis Ritchie in 1972.
          It is known for its speed, efficiency, and control over hardware.
        </p>
        <p>
          C programs are compiled (not interpreted), meaning the source code is converted into machine code before running.
        </p>
        <p>
          Example C Program:<br />
          <code>
{`#include <stdio.h>

int main() {
    printf("Hello C");
    return 0;
}`}
          </code>
        </p>
      </div>

      <div className="tags-to-try">
        <p>Concepts to Try: <code>#include</code>, <code>printf()</code>, <code>main()</code> function</p>
      </div>

      <pre className="instructions">
{`Create a C program that:
1. Prints "Hello C" on the screen using printf().`}
      </pre>

      <Compiler
        LessonId="c-lesson-1"
        initialCode={`#include <stdio.h>

int main() {
    // Write your code here
   printf("Hello C");
    return 0;
}`}
        expectedOutput="
        ={`#include <stdio.h>

int main() {
    // Write your code here
  
    return 0;"
        onSuccess={handleSuccess}
      />

      {isCorrect && (
        <Link
          to="/CLesson2"
          style={{ marginTop: '20px', display: 'inline-block', fontWeight: 'bold' }}
          onClick={goToNextLesson}
        >
          ⏭ NEXT LESSON
        </Link>
      )}
    </div>
  );
};

export default CLesson1;
