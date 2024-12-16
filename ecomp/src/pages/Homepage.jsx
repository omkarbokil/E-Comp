import React from 'react'

function Homepage() {
  return (
    <>
        <main className='homepage-content'>
            <section>
                <div className='main-title'>
                    <p>Shop the Best</p>
                    <p>Computer & Laptop Accessories</p>
                </div>
                <div className='browse-btn'>
                    <a href="#categories">
                        <button className='btn'>
                            Browse All Accessories
                        </button>
                    </a>
                </div>
            </section>
            {/* Categories */}
            <section className='container' id='categories'>
                <div className='categories-section'>
                    <p>Categories</p>
                    <div className='categories-card'>
                        <div className='category-card'>
                            Keyboards
                        </div>
                        <div className='category-card'>
                            Mouse
                        </div>
                        <div className='category-card'>
                            Trackpads
                        </div>
                        <div className='category-card'>
                            Speakers
                        </div>
                        <div className='category-card'>
                            Headphones
                        </div>
                        <div className='category-card'>
                            Laptop Bags
                        </div>
                        <div className='category-card'>
                            Cooling Pads
                        </div>
                        <div className='category-card'>
                            Laptop Stands
                        </div>
                        <div className='category-card'>
                            Cables
                        </div>
                        <div className='category-card'>
                            Printers
                        </div>
                    </div>
                </div>
            </section>
            {/* New Launches */}
            <section className='container' id='new-launches'>
                <div className='nl-section'>
                    <p>New Launches</p>
                    <div className='nl-cards'>
                        <div className='nl-card'>
                            <p>Cooling Pads</p>
                            <button>Explore</button>
                        </div>
                        <div className='nl-card'>
                            <p>Gaming PC</p>
                            <button>Explore</button>
                        </div>
                        <div className='nl-card'>
                            <p>Printers</p>
                            <button>Explore</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Featured Products */}
            <section className='container' id='featured'>
                <div className='featured-section'>
                    <p>Featured Products</p>
                    <div className='featured-cards'>
                        <div className='featured-card'>
                            <img src="keyboard.png" alt="Keyboard" width="100%" />
                            <div className='sc-details'>
                                <p>Logitech Pebble Keys Keyboard</p>
                                <p className='sc-price'>₹ 2,000.00</p>
                                <div className='sc-action-btns'>
                                    <button>Wishlist</button>
                                    <button>Add To Cart</button>
                                    <button>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className='featured-card'>
                            <img src="mouse.png" alt="Mouse" width="100%" />
                            <div className='sc-details'>
                                <p>Arctic Fox Pureview Mouse</p>
                                <p className='sc-price'>₹ 1,000.00</p>
                                <div className='sc-action-btns'>
                                    <button>Wishlist</button>
                                    <button>Add To Cart</button>
                                    <button>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className='featured-card'>
                            <img src="headphones.png" alt="Headphones" width="100%" />
                            <div className='sc-details'>
                                <p>Sony WH-CH720N Headphones</p>
                                <p className='sc-price'>₹ 8,999.00</p>
                                <div className='sc-action-btns'>
                                    <button>Wishlist</button>
                                    <button>Add To Cart</button>
                                    <button>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className='featured-card'>
                            <img src="laptop-stand.png" alt="Laptop Stand" width="100%" />
                            <div className='sc-details'>
                                <p>Portronics Laptop Stand </p>
                                <p className='sc-price'>₹ 999.00</p>
                                <div className='sc-action-btns'>
                                    <button>Wishlist</button>
                                    <button>Add To Cart</button>
                                    <button>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Offers */}
            <section id='offers'>
                <div className='offers-section'>
                    <p>Upto 25% off on all Accessories</p>
                    <div className='offer-imgs'>
                        <img src="pc.png" alt="" width='100%' />
                        <img src="cooling-pad.png" alt="" width='100%' />
                        <img src="keyboard1.png" alt="" width='100%' />
                        <img src="speakers.png" alt="" width='100%' />
                    </div>
                </div>
            </section>
            {/* Brands */}
            <section className='container' id='brands'>
                <div className='brands-section'>
                    <p>Trusted by Leading Brands</p>
                    <div className='brands-imgs'>
                        <img src="logi.png" alt="Logitech" />
                        <img src="hp.png" alt="Hp" />
                        <img src="lenevo.png" alt="Lenevo" />
                        <img src="ant.png" alt="ANT Esports" />
                        <img src="red-dragon.png" alt="Red Dragon" />
                        <img src="dell.png" alt="Dell" />
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default Homepage
