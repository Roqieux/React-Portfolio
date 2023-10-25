import React from "react";
import "../../styles/Project.css";
import cover1 from "../../assets/Proj1.png";
import cover2 from "../../assets/Proj2.png";
import cover3 from "../../assets/Proj3.png";
import cover4 from "../../assets/Proj4.png";
import cover5 from "../../assets/Proj5.png";
import cover6 from "../../assets/Proj6.png";

const data = [
  {
    id: 1,
    image: cover1,
    title: "Phree Philly Phridges",
    github: "https://github.com/Roqieux/shiny-garbanzo",
    demo: "https://shiny-garbonzo-75c1ae74f81a.herokuapp.com/",
  },
  {
    id: 2,
    image: cover2,
    title: "Note Taker",
    github: "https://github.com/Roqieux/Note-Taker",
    demo: "https://roqieux-note-taker-app-847abcdd82fe.herokuapp.com/notes",
  },
  {
    id: 3,
    image: cover3,
    title: "5 day weather app",
    github: "https://github.com/Roqieux/Weather-App-Five-Day",
    demo: "https://roqieux.github.io/Weather-App-Five-Day",
  },
  {
    id: 4,
    image: cover4,
    title: "Bitcoin to house converter",
    github: "https://sjones-njones.github.io/Group-Project-1/index.html",
    demo: "https://github.com/sjones-njones/Group-Project-1.git",
  },
  {
    id: 5,
    image: cover5,
    title: "JATE",
    github: "https://github.com/Roqieux/Text-Editor",
    demo: "https://jate-garbonzo-15cffd40c7c6.herokuapp.com/",
  },
  {
    id: 6,
    image: cover6,
    title: "Logo Maker",
    github: "https://github.com/Roqieux/Logo-Maker",
    demo: "https://github.com/Roqieux/Logo-Maker",
  },
];

function Projects() {
  return (
    <section id="project">
      <h1 className="text-center">Portfolio</h1>

      <div className="row">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="project-item col-6-lg m-3">
              <div className="project-item-image m-3">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="">
                <a
                  href={github}
                  className="btn btn-primary m-3 project-btn"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary m-3 project-btn"
                  target="_blank"
                >
                  Live Site
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
