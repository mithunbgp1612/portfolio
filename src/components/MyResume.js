import React from 'react';
import './myresume.css';
import MyPic from './img/mithun.jpg';
import MyResumeFile from './my-resume-file/My_Resume.pdf';
import ContactPage from './ContactMe';
import Education from './Education';
import Service from './Service';
import MyProject from './MyProject';
import MySkills from './MySkills';

export default function MyResume() {
  return (
    <div className='' style={{ backgroundColor: '#000000' }}>
      {/* Heading section can be add  */}
      <div className='' style={{ backgroundColor: '#000000' }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-7">
              <div className='card mt-5' style={{ backgroundColor: '#000000' }}>
                <h1 className='mx-5 text-white' style={{ fontFamily: 'Playfair Display, serif' }}>Hi, It's </h1>
                <h1 className='mx-5'
                  style={{ color: '#22f8d1', fontFamily: 'Playfair Display, serif' }}>Mithun</h1>
                <h6 className='mx-5 text-white' style={{ fontFamily: 'Playfair Display, serif' }}>I'm a
                  <span style={{ color: '#22f8d1', fontFamily: 'Playfair Display, serif' }}> Software Developer,</span></h6>
                <p className="mx-5 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Immediate Joiner and a Java Backend Developer specializing in building scalable and efficient web applications using Java, Spring Boot, and RESTful APIs. I have experience in developing backend services, handling database operations, and optimizing application performance. I have a strong understanding of the Spring ecosystem, REST APIs design, and clean coding practices. I am passionate about solving real-world problems through technology and continuously improving my skills in backend development.
                I am actively looking for new opportunities and available to join immediately.</p>
                {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                <div className='mx-5'>
                  <a
                    href='https://www.linkedin.com/in/mithunkumarbgp97?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgqO5T4AaTHCHUahL6qItIg%3D%3D'
                    type="button" class="btn btn-outline-info rounded-circle">
                    <i class="fa-brands fa-linkedin-in"></i></a>
                  <a type="button" class="btn btn-outline-info rounded-circle ms-2">
                    <i class="fa-brands fa-github"></i></a>
                  <a type="button" class="btn btn-outline-info rounded-circle ms-2">
                    <i class="fa-brands fa-youtube"></i></a>
                </div>
                <div className='mx-5 mt-3'>
                  <a href='#contact' type="button" class="btn btn-info ms-2">Hire</a>
                  <a href={MyResumeFile} download="My_Resume.pdf" class="btn btn-info ms-3">
                    <i class="bi bi-download"></i> Download Resume
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 me-4 mt-4">
              <div className='container'>
                <div className='card mt-4' style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70% ', background: '#22f8d1', width: '350px', height: '310px', borderBlockColor: 'red', boxShadow: '0 0 20px rgba(0,255,255)', border: '2px solid rgb(252, 250, 250)' }} >
                  <div className='text-center'>
                    <img src={MyPic} alt={MyPic} className="w-100" style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70% ', width: '250px', height: '305px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Education sections can be added here */}
      <div id='edu' className='mt-3' style={{ background: '#151515' }}>
        <Education />
      </div>
      {/* our service sections can be added here */}
      <MySkills />
      {/* our service sections can be added here */}
      <Service />
      {/* our project sections can be added here */}
      <MyProject />
      {/* footer sections can be added here */}
      <ContactPage />
    </div>
  );
}
