import React from "react"
import { BsGithub } from "react-icons/bs"
import { BsTelegram } from "react-icons/bs"
import { BsDribbble } from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/CTILET" target="_blank ">
        <BsGithub  size={24}/>
      </a>
      <a href="https://t.me/GolovanovRV"  target="_blank ">
        <BsTelegram  size={24}/>
      </a>
      <a
        href="https://dribbble.com/shots/17797981-Web-Messenger-Concept/attachments/12967798?mode=media"
        target="_blank "
      >
        <BsDribbble  size={24}/>
      </a>
    </div>
  )
}

export default HeaderSocials
