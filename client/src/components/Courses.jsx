import React from 'react';
import { Link } from 'react-router-dom';

// Images import (renamed to avoid spaces and ensure consistency)
import htmlLogo from '../assets/htmlLogo.png';
import cssLogo from '../assets/cssLogo.png';
import jsLogo from '../assets/jsLogo.png';
import cLogo from '../assets/cLogo.png';
import OOPLogo from '../assets/OOPLogo.png';
import dsaLogo from '../assets/dsaLogo.png';
import nodeLogo from '../assets/nodeLogo.png';
import reactLogo from '../assets/reactLogo.png';
import expressLogo from '../assets/expressLogo.png';
import mongoLogo from '../assets/mongoLogo.png';

const Courses = () => {
  return (
    <div> 
      <h2>Available Courses</h2>
      <div className='course-name'>

        <Link to="/HtmlLesson" className="course-box">
          <img src={htmlLogo} alt="HTML Logo"/>
          <h3>HTML Basics</h3>
          <p>Start your web development journey with HTML.</p>
        </Link>

        <Link to="/CssLesson" className="course-box">
          <img src={cssLogo} alt="CSS Logo"/>
          <h3>CSS for Beginner</h3>
          <p>Learn how to style beautiful websites.</p>
        </Link>

        <Link to="/JsLesson" className="course-box">
          <img src={jsLogo} alt="JavaScript Logo"/>
          <h3>JS for Beginner</h3>
          <p>Learn how to give functionality to websites.</p>
        </Link>

         {/* <div className="course-box">
          <img src={cLogo} alt="C Logo" height="300px" width="200px" />
          <h3>C Language for You!</h3>
          <p>Master the fundamentals of C — the base of all programming.</p>
          <Link to="/CLesson">Start Lesson</Link>
        </div>  */}

        <Link to="/OopLesson" className="course-box">
          <img src={OOPLogo} alt="OOP Logo" />
          <h3>OOP Concepts</h3>
          <p>“Think in objects, not just code.” Learn how real-world programming works.</p>
        </Link>

        <Link to="/DsaLesson" className="course-box">
          <img src={dsaLogo} alt="DSA Logo"/>
          <h3>Data Structures & Algorithms</h3>
          <p>“Code faster, run smarter.” Build the backbone of efficient programming.</p>
        </Link>

        <Link to="/NodeLesson" className="course-box">
          <img src={nodeLogo} alt="Node.js Logo"/>
          <h3>Node.js</h3>
          <p>“JavaScript, but on steroids.” Learn backend development with ease.</p>
        </Link>

        <Link to="/ReactLesson" className="course-box">
          <img src={reactLogo} alt="React Logo" />
          <h3>React.js</h3>
          <p>“Build once, render everywhere.” Master the king of frontend frameworks.</p>
        </Link>

        <Link to="/ExpressLesson" className="course-box" >
          <img src={expressLogo} alt="Express Logo"style={{
          objectFit: "fill",
          height: "120px",
          marginTop: "40px"
        }}/>
          <h3>Express.js</h3>
          <p>“Backend, but lightning fast.” Simplify server-side development.</p>
        </Link>

        <Link to="/MongoLesson" className="course-box">
          <img src={mongoLogo} alt="MongoDB Logo" />
          <h3>MongoDB</h3>
          <p>“Store data like a pro.” Learn the NoSQL database of the modern web.</p>
        </Link>

      </div>
    </div>
  )
}

export default Courses;
