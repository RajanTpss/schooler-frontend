import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CDEdit from '../AdminMain/Actions/CDEdit'
import CDView from '../AdminMain/Actions/CDView'
import ClassesCreate from '../AdminMain/ClassesCreate'
import ClassesView from '../AdminMain/ClassesView'
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
        <Route path='/CView' element = {<ClassesView />} />
        <Route path='/CCreate' element = {<ClassesCreate />} />
        <Route path='/CDView/:id' element = {<CDView />} />
        <Route path='/CDEdit/:id' element = {<CDEdit />} />
    </Routes>
    </>
  )
}

export default Content