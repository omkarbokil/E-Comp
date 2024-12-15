import React from 'react'

function Header() {
  return (
    <>
      <nav className='navbar'>
          <p>E-Comp</p>
          <div className='nav-menu-list'>
            <p>Home</p>
            <p>Collections</p>
            <p>Offers</p>
            <p>New Launch</p>
            <p>Orders</p>
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