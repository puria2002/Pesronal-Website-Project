import React from "react";
import "./About.css";
import { Button } from 'react-bootstrap';
import CutePic from "../../assets/HarvardID.png";

function AgeButton(props){
  const time = Date.now(); //state variable!
  const age = (time - Date.parse(props.bday))/31540000000;

  return(
    <Button variant = "primary"  onClick={() => { alert("I am " + Math.round(10 * age) / 10 +" years old!")}}>
      Click to see my age!
    </Button>
  );
}


export default function AboutScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src={CutePic} className="intro-picture" />
        </div>
        <div className="intro-item">
          <h1>About Me</h1>
          <h2>Math @ Harvard, 2024</h2>
          <p>Hi! I'm Arjun, a freshman at Harvard College 
            interested in the intersection of tech, finance, and statistics!
            Contact me at the email or any of the websites above! 
          </p>
        </div>
      </div>
    <AgeButton bday = "12 May 2002 00:00:00 GMT"></AgeButton>
    </div>
  );
}
