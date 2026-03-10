import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Compiler from './Compiler';

const DSALesson8 = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  const handleSuccess = () => setIsCorrect(true);
  const goToNextLesson = () => navigate('/DSALesson9');

  return (
    <div className="lesson">
      <h1 className="lesson-title">Chapter 8: Doubly & Circular Linked Lists</h1>

      <div className="lesson-content">
        <p>
          A **Doubly Linked List** has nodes with pointers to <strong>both next and previous</strong> nodes.
        </p>
        <p>
          A **Circular Linked List** connects the last node back to the first node.
        </p>
        <p>Advantages:</p>
        <ul>
          <li>Efficient insertion/deletion at both ends</li>
          <li>Traversal in both directions (for doubly)</li>
        </ul>
        <p>Example Node in C (Doubly):</p>
        <pre>
{`struct Node {
    int data;
    struct Node* next;
    struct Node* prev;
};`}
        </pre>
      </div>

      <pre className="instructions">
{`Task:
1. Create a doubly linked list with 3 nodes.
2. Print values in forward and backward order.`}
      </pre>

      <Compiler
        LessonId="dsa-lesson-8"
        language="c"
        initialCode={`#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
    struct Node* prev;
};

int main() {
    // Write your code here
    return 0;
}`}
        expectedOutput={(output) => {
          // Output should have 6 numbers (forward + backward)
          const nums = output.trim().split(/\s+/).map(Number);
          return nums.length === 6;
        }}
        onSuccess={handleSuccess}
      />

      {isCorrect && (
        <Link to="/DSALesson9" className="next-lesson" onClick={goToNextLesson}>
          ⏭ NEXT LESSON
        </Link>
      )}
    </div>
  );
};

export default DSALesson8;
