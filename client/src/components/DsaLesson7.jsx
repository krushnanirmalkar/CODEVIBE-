import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Compiler from './Compiler';

const DSALesson7 = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  const handleSuccess = () => setIsCorrect(true);
  const goToNextLesson = () => navigate('/DSALesson8');

  return (
    <div className="lesson">
      <h1 className="lesson-title">Chapter 7: Linked Lists</h1>

      <div className="lesson-content">
        <p>
          A **Linked List** is a linear data structure where each element (node) contains:
        </p>
        <ul>
          <li>Data</li>
          <li>Pointer to the next node</li>
        </ul>
        <p>Advantages over arrays:</p>
        <ul>
          <li>Dynamic size</li>
          <li>Efficient insertions/deletions</li>
        </ul>
        <p>Example Node in C:</p>
        <pre>
{`struct Node {
    int data;
    struct Node* next;
};`}
        </pre>
      </div>

      <pre className="instructions">
{`Task:
1. Create a singly linked list with 3 nodes.
2. Print all node values.`}
      </pre>

      <Compiler
        LessonId="dsa-lesson-7"
        language="c"
        initialCode={`#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

int main() {
    // Write your code here
    return 0;
}`}
        expectedOutput={(output) => {
          // Output should be 3 numbers, e.g., 1 2 3
          const nums = output.trim().split(/\s+/).map(Number);
          return nums.length === 3;
        }}
        onSuccess={handleSuccess}
      />

      {isCorrect && (
        <Link to="/DSALesson8" className="next-lesson" onClick={goToNextLesson}>
          ⏭ NEXT LESSON
        </Link>
      )}
    </div>
  );
};

export default DSALesson7;
