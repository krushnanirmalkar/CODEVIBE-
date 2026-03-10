import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const DBMSLesson10 = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();
  const handleSuccess = () => setIsCorrect(true);
  const goToNextLesson = () => navigate('/DBMSLesson11');

  return (
    <div className="lesson">
      <h1 className="lesson-title">Chapter 10: Normalization</h1>

      <div className="lesson-content">
        <p>
          Normalization organizes tables to reduce redundancy.
          <b>1NF:</b> atomic values<br />
          <b>2NF:</b> no partial dependency<br />
          <b>3NF:</b> no transitive dependency
        </p>
      </div>

      <pre className="instructions">
{`Task:
1. Convert a table with repeated student courses into 1NF.
2. Apply 2NF and 3NF rules.`}
      </pre>

      <button onClick={handleSuccess}>Mark as Completed ✅</button>

      {isCorrect && (
        <Link to="/DBMSLesson11" className="next-lesson" onClick={goToNextLesson}>
          ⏭ NEXT LESSON
        </Link>
      )}
    </div>
  );
};

export default DBMSLesson10;
