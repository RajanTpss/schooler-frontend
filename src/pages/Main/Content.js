import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Details from './Details'
import ListSubject from './ListSubject'
import OptedSubject from './OptedSubject'

const Content = () => {
  return (
    <>
    <Routes>
        <Route path='/' element = {<Details />} />
        <Route path='/About' element = {<About />} />
        <Route path='/Opted' element = {<OptedSubject />} />
        <Route path='/ListS' element = {<ListSubject />} />
    </Routes>
    </>
  )
}

export default Content