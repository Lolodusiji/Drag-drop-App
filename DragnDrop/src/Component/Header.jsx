import React from 'react'
import search from "../../public/imgs/search.svg"
import "./Header.css"

export const Header = () => {
  return (
    <div>
        <div className="head-container">
            <div className="content-container">
                <h1>Gallery</h1>
                <p>The internet’s source of freely-usable images.</p>
                <p>Powered by creators everywhere.</p>
            <div className="search-input">
            <img src={search} alt="search" class="search-icon"/>
            <input type="search" placeholder="Search for photos"/>
            </div>
            </div>
        </div>
    </div>
  )
}
export default Header;