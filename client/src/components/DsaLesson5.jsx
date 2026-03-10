import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Compiler from './Compiler';

const DSALesson5 = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  const handleSuccess = () => setIsCorrect(true);
  const goToNextLesson = () => navigate('/DSALesson6');

  return (
    <div className="lesson">
      <h1 className="lesson-title">Chapter 5: Searching & Sorting</h1>

      <div className="lesson-content">
        <p>
          Searching is used to find elements in an array. Common techniques:
        </p>
        <ul>
          <li>Linear Search</li>
          <li>Binary Search (sorted arrays)</li>
        </ul>
        <p>
          Sorting is arranging elements in order. Common methods:
        </p>
        <ul>
          <li>Bubble Sort</li>
          <li>Selection Sort</li>
          <li>Insertion Sort</li>
        </ul>
        <p>Example: Bubble Sort</p>
        <pre>
{`for(int i=0; i<n-1; i++){
  for(int j=0; j<n-i-1; j++){
    if(arr[j] > arr[j+1]){
      int temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
    }
  }
}`}
        </pre>
      </div>

      <pre className="instructions">
{`Task:
1. Write a C program to input 5 numbers into an array.
2. Sort them in ascending order using Bubble Sort.
3. Print the sorted array.`}
      </pre>

      <Compiler
        LessonId="dsa-lesson-5"
        language="c"
        initialCode={`#include <stdio.h>

int main() {
    int arr[5];
    // Write your code here
    return 0;
}`}
        expectedOutput={(output) => {
          // Check if output is sorted numbers (basic check)
          const nums = output.trim().split(/\s+/).map(Number);
          if (nums.length !== 5) return false;
          for (let i = 1; i < nums.length; i++) {
            if (nums[i] < nums[i-1]) return false;
          }
          return true;
        }}
        onSuccess={handleSuccess}
      />

      {isCorrect && (
        <Link to="/DSALesson6" className="next-lesson" onClick={goToNextLesson}>
          ⏭ NEXT LESSON
        </Link>
      )}
    </div>
  );
};

export default DSALesson5;
