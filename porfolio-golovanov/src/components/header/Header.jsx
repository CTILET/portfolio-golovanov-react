import React from "react"
import "./header.css"
import CTA from "./CTA"
import Me from "../../assets/me.png"
import HeaderSocials from "./HeaderSocials"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className="greeting">Hello I'm</h5>
        <h1 className="name">
          <span>Rus</span>lan Golova
          <span>noV</span>
        </h1>
        <h5 className="text-light subgreeting">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <div className="meTo">
            <img src={Me} alt="" />
          </div>
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
