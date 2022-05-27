import React from "react"
import "./services.css"
import { BiCheckDouble } from "react-icons/bi"

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service serviceUX">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheckDouble className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheckDouble className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheckDouble className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheckDouble className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheckDouble className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            
          </ul>
        </article>
        {/* UI/UX design end */}
        <article className="service serviceWEB">
          <div className="service__head">
            <h3>Web development</h3>
          </div>
          <div className="wrapper">
            <ul className="service__list">
              <li>
                <BiCheckDouble className="icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheckDouble className="icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheckDouble className="icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheckDouble className="icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheckDouble className="icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li>
                <BiCheckDouble className="icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
            </ul>
          </div>
        </article>
        {/* Web development end  */}
        <article className="service serviceSEO">
          <div className="service__head">
            <h3>Content creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheckDouble className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheckDouble className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheckDouble className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheckDouble className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheckDouble className="icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>
            
          </ul>
        </article>
        {/* SEO optimisation end  */}
      </div>
    </section>
  )
}

export default Services
