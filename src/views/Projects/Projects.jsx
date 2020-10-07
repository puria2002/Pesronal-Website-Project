import React from "react";
import Project from "../../components/Project/Project";

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      <Project
        title="“Mr. Markov Plays Goose Solitaire”"
        description="Modeled the ancient board game of the Goose as a Markov chain in this publication (typeset in LaTeX).
        Utilized game logic to calculate a 68-by-68 transition matrix in Python that was then verified by simulation.
        Analyzed expected number of moves to win from any square, win probabilities by player, and expected game length as a function of the number of players."
        link="https://www.comap.com/product/?idx=1674"
      />
      <Project
        title="2007 KN4"
        description="Monitored the asteroid 2007 KN4 at Sommers-Bausch observatory, making five observations over four weeks. 
        Employed AstroImageJ and image reduction tools to compute astronomical coordinates from observations.
        Implemented the Method of Gauss, along with Monte Carlo simulations for uncertainty, in Python to calculate the classical orbital elements and compare them with public ephemeris data."
        link="https://nasa.gov"
      />
    </div>
  );
}
