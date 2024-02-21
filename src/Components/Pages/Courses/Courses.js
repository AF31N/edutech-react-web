import React from 'react'
import './Courses.css'
import ai from '../../../assets/img/ai.png'
import sd from '../../../assets/img/sd.png'
import dg from '../../../assets/img/dg.png'
import hacking from '../../../assets/img/hacking.png'

function Courses() {
    const courseData=[{
        title:"AI developement",
        desc:"Master AI developement",
        img:ai,
    },
    {
        title:"Software Development ",
        desc:"Master Software Development!!!",
        img:sd,
    },
    {
        title:" Digital Marketing",
        desc:"Master Digital Marketing ",
        img:dg,
    },
    {
        title:"Cyber Security",
        desc:"Master Cyber Security ",
        img:hacking,
    }
]
  return (
    <div className='container course-container'>
        <div className='course-top'>
            <h2 className='section_title'>Our Free Courses</h2>
            <p>The Top Trending Free Courses With Free Certificates</p>
            <div className='course-wrapper'>
                {
                   courseData.map((Data,index)=>(
                    <div className='course-item' key={index}>
                    <span className='course-icon'>
                        <img src={Data.img} alt=''></img>
    
                    </span>
                    <div className='course-content'>
                        <h4>{Data.title}</h4>
                        <p>{Data.desc}</p>
    
                    </div>
                    
    
                    </div>
                   )) 
                }
          


            </div>

        </div>
      
    </div>
  )
}

export default Courses
