import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './TAbout'
import Profile from './TProfile'

const TContent = () => {
  return (
    <>
    <Routes>
        <Route path='/' element = {<Profile />} />
        <Route path='/About' element = {<About />} />
    </Routes>
    </>
  )
}

export default TContent