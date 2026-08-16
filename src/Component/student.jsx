import React from "react";

function Student(props) {
  return (
    <div className="student-card">

      <div className="card-header">
        <div className="student-icon">👤</div>
        <h2>{props.name}</h2>
      </div>

      <div className="student-details">

        <div className="detail-box">
          <span className="label">Roll No.</span>
          <span className="value">{props.rollNo}</span>
        </div>

        <div className="detail-box">
          <span className="label">Course</span>
          <span className="value">{props.course}</span>
        </div>

        <div className="detail-box marks-box">
          <span className="label">Marks</span>
          <span className="value">{props.marks}</span>
        </div>

      </div>

    </div>
  );
}

export default Student;
