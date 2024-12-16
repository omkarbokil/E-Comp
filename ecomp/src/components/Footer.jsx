import React from 'react'

function Footer() {
  return (
    <>
      <footer>
        <div className='footer-content'>
          <p>E-Comp</p>
          <div className='footer-links'>
            <ul>
              <li>Links</li>
              <li><a href="#">Home</a></li>
              <li><a href="#categories">Categories</a></li>
              <li><a href="#new-launches">New Launches</a></li>
              <li><a href="#featured">Featured Products</a></li>
              <li><a href="#offers">Offers</a></li>
            </ul>
            <ul>
              <li>Company</li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">T&C</a></li>
            </ul>
            <ul>
              <li>Social</li>
              <li><a href="#">ecomp@gmail.com</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Youtube</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer