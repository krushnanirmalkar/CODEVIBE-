import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Compiler from './Compiler';

const DSALesson6 = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  const handleSuccess = () => setIsCorrect(true);
  const goToNextLesson = () => navigate('/DSALesson7');

  return (
    <div className="lesson">
      <h1 className="lesson-title">Chapter 6: Stacks & Queues</h1>

      <div className="lesson-content">
        <p>
          Stacks and Queues are **linear data structures**:
        </p>
        <ul>
          <li><b>Stack:</b> LIFO (Last In First Out)</li>
          <li><b>Queue:</b> FIFO (First In First Out)</li>
        </ul>
        <p>Stack Example using array:</p>
        <pre>
{`int stack[10], top=-1;
void push(int x){ stack[++top] = x; }
int pop(){ return stack[top--]; }`}
        </pre>
        <p>Queue Example using array:</p>
        <pre>
{`int queue[10], front=0, rear=-1;
void enqueue(int x){ queue[++rear] = x; }
int dequeue(){ return queue[front++]; }`}
        </pre>
      </div>

      <pre className="instructions">
{`Task:
1. Implement a stack using an array in C.
2. Push 3 numbers into the stack.
3. Pop all numbers and print them.`}
      </pre>

      <Compiler
        LessonId="dsa-lesson-6"
        language="c"
        initialCode={`#include <stdio.h>

int main() {
    int stack[10], top=-1;
    // Write your code here
    return 0;
}`}
        expectedOutput={(output) => {
          // For 3 numbers pushed then popped, output should be 3 2 1
          const nums = output.trim().split(/\s+/).map(Number);
          return nums.length === 3 && nums[0] > nums[1] && nums[1] > nums[2];
        }}
        onSuccess={handleSuccess}
      />

      {isCorrect && (
        <Link to="/DSALesson7" className="next-lesson" onClick={goToNextLesson}>
          ⏭ NEXT LESSON
        </Link>
      )}
    </div>
  );
};

export default DSALesson6;
