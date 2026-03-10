import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Compiler from './Compiler';

const DSALesson11 = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  const handleSuccess = () => setIsCorrect(true);
  const goToNextLesson = () => navigate('/DSALesson12');

  return (
    <div className="lesson">
      <h1 className="lesson-title">Chapter 11: Linked List</h1>

      <div className="lesson-content">
        <p>
          A <strong>Linked List</strong> is a linear data structure where elements are connected using pointers.
        </p>
        <p>Types:</p>
        <ul>
          <li>Singly Linked List</li>
          <li>Doubly Linked List</li>
          <li>Circular Linked List</li>
        </ul>
        <p>Example in C (Singly Linked List):</p>
        <pre>
{`struct Node {
    int data;
    struct Node* next;
};

struct Node* head = NULL;`}
        </pre>
      </div>

      <pre className="instructions">
{`Task:
1. Create a singly linked list with nodes 10, 20, 30.
2. Print all node values.`}
      </pre>

      <Compiler
        LessonId="dsa-lesson-11"
        language="c"
        initialCode={`#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

int main() {
    // Write code to create linked list with 10, 20, 30 and print values
    return 0;
}`}
        expectedOutput={(output) => {
          const nums = output.trim().split(/\s+/).map(Number);
          return nums.length === 3 && nums[0] === 10 && nums[1] === 20 && nums[2] === 30;
        }}
        onSuccess={handleSuccess}
      />

      {isCorrect && (
        <Link to="/DSALesson12" className="next-lesson" onClick={goToNextLesson}>
          ⏭ NEXT LESSON
        </Link>
      )}
    </div>
  );
};

export default DSALesson11;
