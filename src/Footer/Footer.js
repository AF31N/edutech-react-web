import React from 'react'
import './Footer.css'
import footer from '../assets/img/footer.png'

function Footer() {
  return (
    <div>
    <footer className='footer'>
        <div className='container'>
            <div className='footer_wrapper'>

            <div className='footer_box'>
            <div className='logo'>
            <div className='logo-img'>
                <img src={footer} alt=''></img>
                </div>
                <h2>Techflix AI</h2>
                </div>
                <p>Embrace the future of innovation and technology with our cutting-edge buisness solutions</p>
                </div>
                <div className='footer_box'>
                    <h4 className='footer_title'>Company</h4>
                    <ul className='footer_links'>
                        <li>
                        <a href='/courses'>Our Program</a> 
                        </li>
                        <li>
                        <a href='/services'>Our Plans</a> 
                        </li>
                        <li>
                           <a href='/services'>Become a member</a> 
                        </li>
                    </ul>
                </div>
                <div className='footer_box'>
                <h4 className='footer_title'>Quick links</h4>
                    <ul className='footer_links'>
                        <li>
                        <a href='./aboutus'>About Us</a> 
                        </li>
                        <li>
                        <a href='/contactus'>Contact Us</a> 
                        </li>
                        <li>
                        <a href='/supportus'>Support</a> 
                        </li>

                    </ul>
                

                </div>
                


            </div>

        </div>


    </footer>
    </div>
  )
}

export default Footer
