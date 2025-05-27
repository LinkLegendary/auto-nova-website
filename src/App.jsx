import React from 'react'
import Background from './Components/Background/Background.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Navar from './Components/Navbar/Navbar.jsx'
import { useState, useEffect } from 'react'



const App = () => {

  let heroData = [
    {text1:"Dive into", text2:"what you love"},
    {text1:"Indulge", text2:"your passions"},
    {text1:"Give in to", text2:"your passions"}
  ]

const [heroCount , setHeroCount] = useState(1)
const [playStatus, setPlayStatus] = useState (false)

useEffect(() => {
  setInterval(() => {
    setHeroCount((count) => {return count===2?0:count+1})
  },4000)
},[])





return (
    <div>
      <Background 
      playStatus={playStatus}
      heroCount={heroCount}
      
      
      />

     <Navar />
     <Hero 
     setPlayStatus={setPlayStatus}
     heroCount={heroCount}
     heroData={heroData[heroCount]}
     playStatus={playStatus}
     setHeroCount={setHeroCount}
     />

     </div>



     
     
      
   
  )
}

export default App




























