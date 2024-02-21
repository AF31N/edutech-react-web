import React from 'react'
import './Community.css'
import tc from '../../../assets/img/tc.png'

function Community() {
    const handleClick=()=>{
        window.open('https://youtu.be/eL4T1lKhlXs?si=weRY81ZQ733rG_uJ')
    }
  return (
    <div className='container'>
        <div className='start-wrapper'>
        <div className='start-img'>
            <img src={tc} alt=''></img>

        </div>
        <div className='start-content'>
            <h2 className='section_title'>Join Our Free Tech Community</h2>
            <p>Unlock the power ofknowledge and innovation by joining our vibrant and free whatsup Community</p>
            <button className='register-btn' onClick={handleClick}>Join Now</button>

        </div>

        </div>
      
    </div>
  )
}

export default Community
