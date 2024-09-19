import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const One = () => {
    return (



        <div class="color">
            <div>
                <div class="fb"><img src="./images/facebook.png" alt="" /></div>
                <div class="fb"><img src="./images/twitter icon.png" alt="" /></div>
                <div class="fb"><img src="./images/linkedin.png" alt="" /></div>
            </div>
            <div className="space">
                <div  className="study-div">
                    <h2 class="study">Study to</h2>
                    <h2 class="study">become a</h2>
                    <h2 class="study">global talent</h2>
                    <div class="expand"><h6>Learn new tech skills using a world-class curriculum from top</h6></div>
                    <div><h6>industry experts in an accredited institution</h6></div>
                    <div class="start-arrow">
                        <button className="start-button">Start Now
                        <div class="arrow-right"><MdOutlineKeyboardArrowRight /></div> </button>
                      
                    </div>
                </div>
                <div class="picture">
                    <img src="./images/picture.png" alt="" />
                </div>
            </div>

        </div>
    )
}

export default One
