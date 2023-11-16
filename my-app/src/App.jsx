import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Product, Resource, Tool } from './pages'
import { HeaderSection, NavBar, Features, ToolHome, Trial, Footer } from './components'


const App = () => {
  return (
   <BrowserRouter>

   <NavBar/>
   <HeaderSection/>
   <Features/>
   <ToolHome/>
   <Trial/>
   <Footer/>

   <Routes>
    <Route path="/" exact component={HeaderSection} />
    <Route path="/product" component={Product} />
    <Route path="/resource" component={Resource} />
    <Route path="/tool" component={Tool} />
   </Routes>
   
   </BrowserRouter>
  )
}

export default App