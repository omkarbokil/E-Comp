import React from 'react'

function Header() {
  return (
    <>
      <nav className='navbar'>
          <p>E-Comp</p>
          <div className='nav-menu-list'>
            <a href="#">Home</a>
            <a href="#new-launches">New Launch</a>
            <a href="#featured">Products</a>
            <a href="#offers">Offers</a>
            <a href="#">Orders</a>
          </div>
          <div className='nav-icons'>
            <span class="material-symbols-outlined">
              shopping_bag
            </span>
            <span class="material-symbols-outlined">
              person
            </span>
          </div>
      </nav>
    </>
  )
}

export default Header