import React from "react"
import "./experience.css"
import { BsPatchCheckFill } from "react-icons/bs"

const Experience = () => {
  return (
    <section id="experience">
      <h5> What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__fontend">
          <h3>Frontend Develompent</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill /> <h4>HTML5</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill /> <h4>CSS3</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill /> <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill /> <h4>React js</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill /> <h4>NEXT Js</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill /> <h4>Tailwind CSS</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
          {/*========= frontend END =========*/}
        </div>
        <div className="experinect__backend">
        <article className="experience__details">
              <BsPatchCheckFill /> <h4>Node Js</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill /> <h4>Strapi</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill /> <h4>Sanity</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill /> <h4>Github</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill /> <h4>Supabase</h4>
              <small className="text-light">Experienced</small>
            </article>
        </div>
      </div>
    </section>
  )
}

export default Experience
