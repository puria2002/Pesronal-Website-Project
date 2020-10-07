import React, { useState } from "react";
import "./Experience.css";

function TimeLineItem(props) {
  return (
    <div
      className="timeline-item"
      onClick={() => {
        props.setActiveTitle(props.title);
        props.setActiveDescription(props.description);
      }}
    >
      <div className="experience-info">
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}

export default function ExperienceScreen() {
  const [activeTitle, setActiveTitle] = useState("");
  const [activeDescription, setActiveDescription] = useState("");

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem
            title="Grader @ Art of Problem Solving"
            description="Graded submissions for competitive math problems in number theory, geometry, combinatorics, and algebra.
            Offered positive, constructive feedback on mathematical correctness, clarity, and rigor."
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
          <TimeLineItem
            title="FLAG Conference"
            description="Coordinated a three-day, two-night policy debate conference, welcoming 30 students.
            Promoted through phone calls and emails, made a website, and fundraised 2,500 USD for need-based aid."
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
        </div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
          <p>{activeDescription}</p>
        </div>
      </div>
    </div>
  );
}
