import React from 'react'
import AboutCarousel from '../../components/carousel/AboutCarousel';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header/Header'

function About() {
  return (
    <>

    
    <Header active='about'/>
    <AboutCarousel />
<div id="theme" className="target">
            <div className="container mb-5" >
            <h1 className="mb-3 mt-5 green-heading">About College</h1>
            <p>Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad is affiliated to Dr. A.P.J. Abdul Kalam Technical University, Lucknow, India and is approved by the All India Council for Technical Education. The college was established in 1998 and offers B. Tech Courses in ten disciplines of Engineering. The college also offers M. Tech in Computer Science & Engineering, Electronics & Communication Engineering, Electrical and Electronics Engineering, Mechanical Engineering and Automation & Robotics. The college strives for excellence and has been consistently maintaining excellent academic results and placements. The college has the distinction of being the first and only college in Uttar Pradesh, India to receive the Academic Excellence Award for the Best Engineering College in Uttar Pradesh Technical University from H.E. the Governor of Uttar Pradesh, India for two successive years. It is a matter of pride for the College to maintain a superlative overall academic performance over the years.<br/><br/>
The college places special emphasis on collaboration with industries at various levels to groom the students to meet the industry and research standards. These include establishing collaborative facilities for student training in emerging multidisciplinary technologies and undertaking industry sponsored consultancy and research projects. The college has the distinction of being the only Engineering College in the State of U.P. to have received approval from Department of Science and Technology (DST), Government of India, for establishment of Centre of Relevance and Excellence (CORE) in the field of Automation & Robotics. The program envisages a unique partnership between AKGEC and international industries to promote research, consultancy, project development and training in the emerging technological field of Automation and Robotics.
</p>
            </div>
            </div>

      <Footer />
    </>
  );
}

export default About;
