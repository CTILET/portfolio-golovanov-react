import React from "react"
import "./about.css"
import Me from "../../assets/meme.jpg"
import { FaUserGraduate } from "react-icons/fa"
import { AiOutlineFundProjectionScreen } from "react-icons/ai"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={Me} className="MyImage" alt="smiling face " />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaUserGraduate className="about__icon" />
              <h5> Experience</h5>
              <small>1+ Year Styding</small>
            </article>
            <article className="about__card">
              <AiOutlineFundProjectionScreen className="about__icon" />
              <h5>Projects</h5>
              <small>10+ complited projects</small>
            </article>
            {/* <article className="about__card">
              <FaUserGraduate className="about__icon" />
              <h5> Experience</h5>
              <small>1+ Year Styding</small>
            </article> */}
          </div>
          <div>
            <p>
              I have been learning web development for about 1 year (from april
              2021 up to may 2022). I have studied at MindBox online courses and
              get knowlege in such languages HTML, CSS, JS and other fiatures
              like React, Next Js, Figma, Node Js, GIT, Bootstrap, Tailwind CSS,
              Strapi, Supabase, PostgreSQL, Sanity and many more.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
