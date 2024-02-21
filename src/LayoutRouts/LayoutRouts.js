import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from '../Components/Pages/Home/Home'
import Footer from '../Footer/Footer'
import Header from '../Components/Header/Header'
import Plans from '../Components/Pages/Plans/Plans'
import Courses from '../Components/Pages/Courses/Courses'
import AboutUs from '../Components/Pages/About Us/About Us'
import Contact from '../Components/Pages/ContactUs/Contact'
import Support from '../Components/Pages/SupportUs/Support'
function LayoutRouts() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/edutech-react-web' element={<Home/>}></Route>
            <Route path='/services' element={<Plans/>}></Route>
            <Route path='/courses' element={<Courses/>}></Route>
            <Route path='/aboutus' element={<AboutUs/>}></Route>
            <Route path='/contactus' element={<Contact/>}></Route>
            <Route path='/supportus' element={<Support/>}></Route>
        </Routes>
        <Footer/>

    </Router>
  )
}

export default LayoutRouts
