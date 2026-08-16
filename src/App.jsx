
import React from "react";
import Student from "./Component/student";
import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Background Bubbles */}
      <div className="bubbles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Main Content */}
      <div className="container">

        <h1>🎓 Student Details</h1>
        <p className="subtitle">Student Academic Information</p>

        <div className="student-list">

          <Student
            name="Leesha Soni"
            rollNo="101"
            course="BCA"
            marks="85%"
          />

          <Student
            name="Tanisha Malviya"
            rollNo="102"
            course="BCA"
            marks="92%"
          />

          <Student
            name="Rishi Patel"
            rollNo="103"
            course="BCA"
            marks="78%"
          />

        </div>

      </div>
    </div>
  );
}

export default App;