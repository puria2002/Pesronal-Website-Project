import React, { useState } from "react";
import "./Education.css";
import Harvard from "../../assets/Harvard.png";
import MUS from "../../assets/MUS.png";


function EducationItem(props) {
  return (
    <div
      className="timeline-item"
      onClick={() => {
        props.setActiveImage(props.image);
      }}
    >
      <div className="experience-info">
      <h4>{props.title}</h4>
      <p> {props.description}</p>
      </div>
    </div>
  );
}

export default function EducationScreen() {
  const [activeImage, setActiveImage] = useState(Harvard);

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <EducationItem
            title="Math 55"
            description="Rigorous course in abstract algebra and analysis taken at Harvard College "
            setActiveImage={setActiveImage}
            image = {Harvard}
          />
          <EducationItem
            title="Topology and Abstract Algebra"
            description="Created a course at Memphis University School covering basic algebra and topology, including 
            some algebraic number theory and algebraic topology."
            setActiveImage={setActiveImage}
            image = {MUS}
          />
           <EducationItem
            title="Statistics 210"
            description="Graduate course in probability taken at Harvard College, which 
            develops probability rigorously through measure theory before exploring parts of 
            probability most useful for statistics."
            setActiveImage={setActiveImage}
            image = {Harvard}
          />
        </div>
      </div>
      <div>
        <img src = {activeImage} className = "image" /> 
      </div>
    </div>
  );
}