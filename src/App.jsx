import React, { useState } from 'react'
import Navbar1 from './components/navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './components/login'
import Signin from './components/signin'
import Home from './home'
import Recipes from './components/recipes'
import Addtocart from './components/addtocart'
import Save from './components/save'

const App = () => {

  const [persist, setpersist] = useState(false)

  return (
    <div>
      <Navbar1 persist={persist} setpersist={setpersist}  />
      <Routes>
        <Route path='/login' element={<Login persist={persist} setpersist={setpersist} />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/addtocart' element={<Addtocart />} />
        <Route path='/favorites' element={<Save />} />
      </Routes>
    </div>
  )
}

export default App
