import React from 'react'
import './home.css'
import ScrollDown from './ScrollDown'
import Social from './Social'
export default function Home() {
  return (
    <section id='home'>
   <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>

          {/* <Data /> */}
        </div>
        <ScrollDown />
      </div>
    </section>
    </section>
  )
}
