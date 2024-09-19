import React from 'react'
import { FaAngleRight } from "react-icons/fa6";


const Sec = () => {
    return (
        <div>
            <div class="start-here">
                <h4 class="start-heree">Start here. Change the world.</h4>
            </div>
            <div class="parent-div">
                <div class="image-one"><img src="./images/college.jpg" alt="" className="aspect" />
                    <div class="National-div"><h6>National Innovative Diploma</h6>

                    </div>
                    <div class="nid-div"><h6>(NID)</h6></div>
                    <div class="p-div">
                        <p>The National Innovation Diploma (NID) offered at SQI College of ICT is a 2 year approved academic program of the National Board for Technical Education (NBTE).

                        </p>

                    </div>
                    <div class="learn-more">
                       <h6 class="lea-more">Learn More</h6>
                        <div class="angle-div">
                        <FaAngleRight />
                        </div>
                    </div>
                </div>
                <div class="image-two"><img src="./images/prof.jpg" alt="" className="aspect" />
                    <div class="National-div"><h6>Professional Diploma</h6>

                    </div>
                    <div class="nid-div"><h6>Certificate</h6></div>
                    <div class="p-div">
                        <p>The Professional Certificate Program is 1 year practical training with wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their career.</p></div>
                        <div class="learn-moore">
                        <h6>Learn More</h6>
                        <div class="angle-div">
                        <FaAngleRight />
                        </div>

                    </div></div>
                        
                        
                <div class="image-three"><img src="./images/certificate.jpg" alt="" className="aspect" />
                    <div class="National-div"><h6>Certificate Program</h6>

                    </div>
                    <div class="last-p">
                        <p>The Certificate Program is a short-term training, 2 weeks to 6 months with a wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their careers.</p>
                    </div>
                    <div class="learn-more">
                        <h6>Learn More</h6>
                        <div class="angle-div">
                        <FaAngleRight />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sec
