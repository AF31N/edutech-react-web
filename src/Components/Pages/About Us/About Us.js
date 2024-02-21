import React from 'react'
import './About Us.css'
import miya from '../../../assets/img/miya.jpg'

function AboutUs() {
  return (
    <div className='container'>
        <div className='about-us-container'>
        <div className='team-members'>
            <h2>Our Team</h2>
            <div className='Member-card'>
                <img src={miya} alt='' className='Member-image'></img>
                <h3 className='Member-name'>Rizan PM</h3>
                <p className='Member-role'>Co-founder</p>
            

            </div>
            

            </div>
            <div className='about-us-description'>
                <h1 className='about-us-heading'>About Us</h1>
                <p>With a passion for empowering learners of all ages,our mission
                    is to make education accessible , engaging and personalized
                    through our cutting-edge educational technology platform </p>
            

            </div>


        </div>
      
    </div>
  )
}

export default AboutUs
