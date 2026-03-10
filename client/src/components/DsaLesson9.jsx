import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Compiler from './Compiler';

const DSALesson9 = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  const handleSuccess = () => setIsCorrect(true);
  const goToNextLesson = () => navigate('/DSALesson10');

  return (
    <div className="lesson">
      <h1 className="lesson-title">Chapter 9: Stack</h1>

      <div className="lesson-content">
        <p>
          A **Stack** is a linear data structure that follows <strong>LIFO (Last In First Out)</strong>.
        </p>
        <p>Basic operations:</p>
        <ul>
          <li><strong>push()</strong> → Add element on top</li>
          <li><strong>pop()</strong> → Remove top element</li>
          <li><strong>peek()/top()</strong> → View top element</li>
        </ul>
        <p>Example in C:</p>
        <pre>
{`#define MAX 100
int stack[MAX];
int top = -1;

void push(int x) { stack[++top] = x; }
int pop() { return stack[top--]; }`}
        </pre>
      </div>

      <pre className="instructions">
{`Task:
1. Implement a stack of size 3.
2. Push numbers 10, 20, 30.
3. Pop one number and print the stack.`}
      </pre>

      <Compiler
        LessonId="dsa-lesson-9"
        language="c"
        initialCode={`#include <stdio.h>
#define MAX 3

int stack[MAX];
int top = -1;

void push(int x) {
    // Write code
}

int pop() {
    // Write code
    return 0;
}

int main() {
    // Write code
    return 0;
}`}
        expectedOutput={(output) => {
          const nums = output.trim().split(/\s+/).map(Number);
          // After push 10,20,30 and pop one, remaining two numbers
          return nums.length === 2 && nums.includes(10) && nums.includes(20) && !nums.includes(30);
        }}
        onSuccess={handleSuccess}
      />

      {isCorrect && (
        <Link to="/DSALesson10" className="next-lesson" onClick={goToNextLesson}>
          ⏭ NEXT LESSON
        </Link>
      )}
    </div>
  );
};

export default DSALesson9;
