import React from 'react'
import Typed from "react-typed";
import { VscReactions } from "react-icons/vsc";
export default function Inforamtion() {
  return (
    <div className='home__data'>
        <h2 className='home__title'>Muhammad Fahad</h2>
        <div className="home__subtitle">
        <Typed
          strings={[
            "Frontend web developer",
            "Mobile app developer",
            "Figma designer",
            "Graphic designer",
            "Web designer",
          ]}
          typeSpeed={50}
          backSpeed={50}
          loop
        />
      </div>
      <p className="home__description">
        I'm a web developer based in Faisalabad, and I'm very passionate and
        dedicated to my work.
      </p>
        <a href='#contact'>
            <button className='button button--flex'>Say hello <VscReactions style={{width:'3rem',height:'28px'}}/></button>
            
        </a>
    </div>
  )
}
