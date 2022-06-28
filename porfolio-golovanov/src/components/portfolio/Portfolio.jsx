import React from "react"
import "./portfolio.css"
import img1 from "../../assets/Antools.png"
import img2 from "../../assets/Quo.jpg"
import img3 from "../../assets/phantom.png"
import img4 from "../../assets/telegram.png"
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox.css"

const data = [
  {
    id: 1,
    image: img1,
    title: "Antools awesome tools for designers and developments",
    github: "https://github.com/CTILET/antools-course-project",
    demo: "https://dribbble.com/shots/15011165-Antools-Landing-Page-Exploration",
  },
  {
    id: 2,
    image: img2,
    title: "QUO - Easy money transaction",
    github: "https://github.com/CTILET/Quo",
    demo: "https://www.figma.com/file/cKqxDnLF8Kv3wUUTVyRzn4/QUO?node-id=0%3A1",
  },
  {
    id: 3,
    image: img3,
    title: "Phantom - A friendly crypto wallet",
    github: "https://github.com/ramziddin/phantom-strapi",
    demo: "https://phantom-landing.vercel.app/",
  },
  {
    id: 4,
    image: img4,
    title: "Messanger - A chat app",
    github: "https://github.com/CTILET",
    demo: "https://dribbble.com/shots/14473800-Chat-Messenger-Web-App",
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container porfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="porfolio__item">
              <div className="porfolio__item-image">
                <img
                  src={image}
                  alt={title}
                  href={image}
                  data-fancybox="gallery"
                  data-caption="Optional caption"
                />
              </div>
              <h3>{title}</h3>
              <div className="porfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
