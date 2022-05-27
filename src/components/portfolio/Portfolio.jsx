import React from "react"
import "./portfolio.css"
import Antools from "../../assets/Antools.png"
import Quo from '../../assets/Quo.jpg'
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="porfolio__item">
          <div className="porfolio__item-image">
            <img src={Antools} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/CTILET/antools-course-project"
              className="btn"
            >
              Github
            </a>
            <a href="/" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="porfolio__item">
          <div className="porfolio__item-image">
            <img src={Quo} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/CTILET/Quo"
              className="btn"
            >
              Github
            </a>
            <a href="/" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
