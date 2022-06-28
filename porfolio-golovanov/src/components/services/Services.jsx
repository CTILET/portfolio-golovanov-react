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
              <p>Visual Design</p>
            </li>
            <li>
              <BiCheckDouble className="icon" />
              <p>Branding</p>
            </li>
            <li>
              <BiCheckDouble className="icon" />
              <p>Layout</p>
            </li>
            <li>
              <BiCheckDouble className="icon" />
              <p>Usability Testing</p>
            </li>
            <li>
              <BiCheckDouble className="icon" />
              <p>User Research</p>
            </li>
            <li>
              <BiCheckDouble className="icon" />
              <p>User Stories</p>
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
                <p>
                  {" "}
                  <span>API </span>- Application programming interface
                </p>
              </li>
              <li>
                <BiCheckDouble className="icon" />
                <p>
                  <span>BEM</span> - Block element modifier
                </p>
              </li>
              <li>
                <BiCheckDouble className="icon" />
                <p>
                  <span>CDN </span> - Content delivery network
                </p>
              </li>
              <li>
                <BiCheckDouble className="icon" />
                <p>
                  <span> CMS</span> - Content management system
                </p>
              </li>
              <li>
                <BiCheckDouble className="icon" />
                <p>
                  <span>DOM</span> - Document object model
                </p>
              </li>
              <li>
                <BiCheckDouble className="icon" />
                <p>
                  <span>CTA</span> - Call to action.
                </p>
              </li>
              <li>
                <BiCheckDouble className="icon" />
                <p>
                  <span>JSON </span> - JavaScript Object Notation.
                </p>
              </li>
              <li>
                <BiCheckDouble className="icon" />
                <p>
                  <span>OOP</span> - oriented programing.
                </p>
              </li>
            </ul>
          </div>
        </article>
        {/* Web development end  */}
        <article className="service serviceSEO">
          <div className="service__head">
            <h3>SEO optimisation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheckDouble className="icon" />
              <p>Keyword research</p>
            </li>
            <li>
              <BiCheckDouble className="icon" />
              <p>Content marketing</p>
            </li>
            <li>
              <BiCheckDouble className="icon" />
              <p>Link building</p>
            </li>
            <li>
              <BiCheckDouble className="icon" />
              <p>On-page optimization</p>
            </li>
            <li>
              <BiCheckDouble className="icon" />
              <p>Site architecture optimization</p>
            </li>
            <li>
              <BiCheckDouble className="icon" />
              <p>Semantic markup</p>
            </li>
          </ul>
        </article>
        {/* SEO optimisation end  */}
      </div>
    </section>
  )
}

export default Services
