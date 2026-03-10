import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Compiler from './Compiler';

const DSALesson10 = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  const handleSuccess = () => setIsCorrect(true);
  const goToNextLesson = () => navigate('/DSALesson11');

  return (
    <div className="lesson">
      <h1 className="lesson-title">Chapter 10: Queue</h1>

      <div className="lesson-content">
        <p>
          A **Queue** is a linear data structure that follows <strong>FIFO (First In First Out)</strong>.
        </p>
        <p>Basic operations:</p>
        <ul>
          <li><strong>enqueue()</strong> → Add element at rear</li>
          <li><strong>dequeue()</strong> → Remove element from front</li>
          <li><strong>peek()/front()</strong> → View front element</li>
        </ul>
        <p>Example in C:</p>
        <pre>
{`#define MAX 100
int queue[MAX];
int front = 0, rear = -1;

void enqueue(int x) { queue[++rear] = x; }
int dequeue() { return queue[front++]; }`}
        </pre>
      </div>

      <pre className="instructions">
{`Task:
1. Implement a queue of size 3.
2. Enqueue numbers 5, 10, 15.
3. Dequeue one number and print remaining elements.`}
      </pre>

      <Compiler
        LessonId="dsa-lesson-10"
        language="c"
        initialCode={`#include <stdio.h>
#define MAX 3

int queue[MAX];
int front = 0, rear = -1;

void enqueue(int x) {
    // Write code
}

int dequeue() {
    // Write code
    return 0;
}

int main() {
    // Write code
    return 0;
}`}
        expectedOutput={(output) => {
          const nums = output.trim().split(/\s+/).map(Number);
          // After enqueue 5,10,15 and dequeue one, remaining two numbers
          return nums.length === 2 && nums.includes(10) && nums.includes(15) && !nums.includes(5);
        }}
        onSuccess={handleSuccess}
      />

      {isCorrect && (
        <Link to="/DSALesson11" className="next-lesson" onClick={goToNextLesson}>
          ⏭ NEXT LESSON
        </Link>
      )}
    </div>
  );
};

export default DSALesson10;
