import React from "react"
import "./experience.css"
import { BsPatchCheckFill } from "react-icons/bs"
import { SiStrapi } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { SiNextdotjs } from "react-icons/si"
import { AiOutlineHtml5 } from "react-icons/ai"
import { DiCss3Full } from "react-icons/di"
import { SiJavascript } from "react-icons/si"
import { GrNode } from "react-icons/gr"
import { SiTailwindcss } from "react-icons/si"
import { BsGithub } from "react-icons/bs"
import { SiSupabase } from "react-icons/si"
import { FaFigma } from "react-icons/fa"

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
              <AiOutlineHtml5  className="icon"/>
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <DiCss3Full className="icon" />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className="icon" />

              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="icon"/>
              <div>
                <h4>React js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiNextdotjs className="icon"/>
              <div>
                <h4>NEXT Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiTailwindcss className="icon"/>
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
          {/*========= frontend END =========*/}
        </div>
        <div className="experinect__backend">
          <h3>Other features</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GrNode className="icon"/>
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiStrapi className="icon"/>
              <div>
                <h4>Strapi</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>Sanity</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsGithub className="icon"/>
              <div>
                <h4>Github</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiSupabase className="icon"/>
              <div>
                <h4>Supabase</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaFigma className="icon" />
              <div>
                <h4>Figma</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
