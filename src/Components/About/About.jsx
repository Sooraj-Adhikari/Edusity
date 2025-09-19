import React from 'react'
import './About.css'
import about from '../../assets/about.png'
import play from '../../assets/play-icon.png'
const About = (props) => {
  return (
    <div className='about'>
        <div className="about_left">
            <img src={about} alt="" className='about_img'/>
            <img src={play} alt="" className='play_icon' onClick={()=>{
              props.setPlayState(true);
            }} />
        </div>
      <div className="about_right">
      <h3>ABOUT UNIVERSITY</h3>

<h2>Nurturing Tomorrow's Leaders Today</h2>

<p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences.</p>

<p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>

<p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential. </p>
      </div>
    </div>
  )
}

export default About
