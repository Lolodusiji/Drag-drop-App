import React from 'react'
import "./Gallery.css"
import Art1 from "../../public/imgs/Art1.jpg"
import Art2 from "../../public/imgs/Art2.jpg"
import Art3 from "../../public/imgs/Art3.jpg"
import Art4 from "../../public/imgs/Art4.jpg"
import Art5 from "../../public/imgs/Art5.jpg"
import Art6 from "../../public/imgs/Art6.jpg"
import Art7 from "../../public/imgs/Art7.jpg"
import Art8 from "../../public/imgs/Art8.jpg"
import Art9 from "../../public/imgs/img1.jpg"
import Art10 from "../../public/imgs/img2.jpg"
import Art11 from "../../public/imgs/img3.jpg"
import Art12 from "../../public/imgs/img4.jpg"


const Gallery = () => {
  return (
    <div>
        <div className="general-container">
    <div className="img-cont">
        <img src={Art1} alt=""/>
    </div>
    <div className="img-cont">
        <img src={Art2} alt=""/>
    </div>
    <div className="img-cont">
        <img src={Art3} alt=""/>
    </div>
    <div className="img-cont">
        <img src={Art4} alt=""/>
    </div>
    <div className="img-cont">
        <img src={Art5} alt=""/>
    </div>
    <div className="img-cont">
        <img src={Art6} alt=""/>
    </div>
    <div className="img-cont">
        <img src={Art7} alt=""/>
    </div>
    <div className="img-cont">
        <img src={Art8} alt=""/>
    </div>
    <div className="img-cont">
        <img src={Art9} alt=""/>
    </div> <div className="img-cont">
        <img src={Art10} alt=""/>
    </div> <div className="img-cont">
        <img src={Art11} alt=""/>
    </div> <div className="img-cont">
        <img src={Art12} alt=""/>
    </div>
        </div>
    </div>
  )
}

export default Gallery