import React from 'react'
import meta from '../../../assets/img/meta.jpeg'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import './Home.css'
import Courses from '../Courses/Courses'
import Community from '../Community/Community'
import Plans from '../Plans/Plans'

function Home() {
    const handleclick=()=>{
        window.open('https://youtu.be/AcKEdVNGibA?si=v6OezamYyizM3fYh')
    }
  return (
    <>
    <section>
        <div className='container'>
        <div className='home-container'>
        <div className='home-content'>
            <h2 className='section_title'>Learn Everything For Free!!</h2>
            <p>Master Trending Technologies With Techflix AI,Invest Your Time and return skills</p>
            <div className='home-btns'>
                <button className='register-btn' onClick={handleclick}>
                    Get Started
                </button>
                <button className='register-btn' onClick={handleclick}>
                    Watch Now
                </button>

            </div>

        </div>
        <div className='home-img'>
        <div className='home-img-wrapper'>
        <div className='box-01'>
        <div className='box-img'>
            <img src={meta} alt=''></img>

        </div>
        <div className='watsapp-container'>
            <h5>500+ Students</h5>
            <AiOutlineWhatsApp color='green'/>

        </div>
        <div className='support'>
            <h5>Active Support</h5>

        </div>

        </div>

        </div>

        </div>



         </div>

        </div>
    </section>
   <Courses/>
   <Community/>
   <Plans/>
   </>
   
 
  )
}

export default Home
