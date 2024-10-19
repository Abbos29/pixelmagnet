// import React from 'react'

import Featured from "../components/layout/Featured/Featured"
import Hero from "../components/layout/Hero/Hero"
import Lets from "../components/layout/Lets/Lets"
import Logos from "../components/layout/Logos/Logos"
import Quote from "../components/layout/Quote/Quote"
import What from "../components/layout/What/What"


const Home = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Featured />
      <What />
      <Quote/>
      <Lets />
    </>
  )
}

export default Home