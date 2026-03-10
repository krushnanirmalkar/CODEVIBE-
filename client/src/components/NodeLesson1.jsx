import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const NodeLesson1 = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();
  const handleSuccess = () => setIsCorrect(true);
  const goToNextLesson = () => navigate('/NodeLesson2');

  return (
    <div className="lesson">
      <h1 className="lesson-title">Node.js Lesson 1: Introduction</h1>

      <div className="lesson-content">
        <p>
          Node.js is a JavaScript runtime built on Chrome's V8 engine.  
          It allows running JavaScript on the server side.
        </p>
        <ul>
          <li>Event-driven, non-blocking I/O</li>
          <li>Great for real-time apps</li>
          <li>Uses npm (Node Package Manager) for libraries</li>
        </ul>
      </div>

      <pre className="instructions">
{`Task:
1. Install Node.js from nodejs.org
2. Run: node -v and npm -v to check installation`}
      </pre>

      <button onClick={handleSuccess}>Mark as Completed ✅</button>

      {isCorrect && (
        <Link to="/NodeLesson2" className="next-lesson" onClick={goToNextLesson}>
          ⏭ NEXT LESSON
        </Link>
      )}
    </div>
  );
};

export default NodeLesson1;
