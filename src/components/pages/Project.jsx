import React from "react";
import "./project.css";
import cover1 from "../../assets/Proj1.jpg";
import cover2 from "../../assets/Proj2.jpg";
import cover3 from "../../assets/Proj3.jpg";
import cover4 from "../../assets/Proj4.gif";
import cover5 from "../../assets/Proj5.png";
import cover6 from "../../assets/Proj6.jpg";

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

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
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

export default Portfolio;
