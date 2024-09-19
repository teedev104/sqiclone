import React from 'react'
import { FaChevronDown, FaFileImport } from "react-icons/fa";
import Image from "./images/co.jpeg"



const Nav = () => {
  return (
    <nav class="nav-div">
      <div class="totalcontain">
      <div class="image-container"><img src="./images/co.jpeg" alt="" />
          
          </div>
          <div className="luck">
        
        <div className="test">
          <div class="about-hov"> <a href=""><p>About</p>
            <p><FaChevronDown /></p></a>
            <div class="drop-down">
              <div><p>Our story</p></div>
              <p>Our Team</p>
              <p>Campus info</p>
            </div>
          </div>
          <div class="prog-hov"> <a href=""><p >Programmes</p>
            <p><FaChevronDown /></p></a>
            <div class="drop-two">
              <div>
                <div><p>National Innovation </p>
                  <p>Diploma</p>
                </div>
                <div>
                  <p>Professional Diploma </p>
                  <p>Programme</p>
                </div>
                <div>
                  <p>Executive Professional </p>
                  <p>Certificate</p>
                  <p>Programme</p>
                  <p></p>
                </div>


              </div>
            </div>
          </div>
          <div class="admission-hov"><a href=""><p>Admissions</p>
            <p><FaChevronDown /></p></a>

            <div class="drop-three">
              <div>
                <p>Apply for a</p>
                <p>Programme</p>
              </div>
              <div><p>Mode of study</p></div>
              <div><p>Tution</p></div>
              <div><p>Frequently Asked</p></div>
              <div><p>Questions</p></div>
            </div>
          </div>
          <div class="eportal-hov"> <a href=""><p>E-portal</p>
            <p><FaChevronDown /></p></a>
            <div class="drop-four">
              <div><p>Student</p></div>
              <div><p>Staff</p></div>
            </div></div>

          <div><p>SQI scholarship</p></div>
          <div> <p>News</p></div>

        </div>

      </div>

      </div>
     
      
      <hr />
    </nav>







  )
}


export default Nav


