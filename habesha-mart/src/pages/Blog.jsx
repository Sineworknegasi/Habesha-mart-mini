import React from 'react'
import {FaSearch} from 'react-icons/fa'
import './Blog.css'

const Blog = () => {
    return (
        <section className='bg'>
            <section className="bg-title-page">
                <h2 className="l-text2">Blog</h2>
            </section>
            <section className="container">
                <div className="rows">
                    <div className="left">
                        <div className='imgwithtime'>
                            <img src="https://preview.colorlib.com/theme/fashe/images/blog-04.jpg.webp" alt="" />
                            <p className='bgblack'>28 DEC,2018</p>
                        </div>
                        <div className='blog-disc'>
                            <h2 className='blog-title'>Black Friday Guide: Best Sales & Discount Codes</h2>
                            <p className='admin'>By Admin | cooking ,Food | 8 Comments </p>
                            <p className="blog-desc">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                            <a href="#/">Continue Reading </a>
                        </div>
                        <div className='imgwithtime'>
                            <img src="https://preview.colorlib.com/theme/fashe/images/blog-05.jpg" alt="" />
                            <p className='bgblack'>28 DEC,2018</p>
                        </div>
                        <div className='blog-disc'>
                            <h2 className='blog-title'>The White Sneakers Nearly Every Fashion Girls Own</h2>
                            <p className='admin'>By Admin | cooking ,Food | 8 Comments </p>
                            <p className="blog-desc">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                            <a href="#/">Continue Reading </a>
                        </div>
                        <div className='imgwithtime'>
                            <img src="https://preview.colorlib.com/theme/fashe/images/blog-08.jpg" alt="" />
                            <p className='bgblack'>28 DEC,2018</p>
                        </div>
                        <div className='blog-disc'>
                            <h2 className='blog-title'>Black Friday Guide: Best Sales & Discount Codes</h2>
                            <p className='admin'>By Admin | cooking ,Food | 8 Comments </p>
                            <p className="blog-desc">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                            <a href="#/">Continue Reading </a>
                        </div>
                        <div className='imgwithtime'>
                            <img src="https://preview.colorlib.com/theme/fashe/images/blog-02.jpg" alt="" />
                            <p className='bgblack'>28 DEC,2018</p>
                        </div>
                        <div className='blog-disc'>
                            <h2 className='blog-title'>Black Friday Guide: Best Sales & Discount Codes</h2>
                            <p className='admin'>By Admin | cooking ,Food | 8 Comments </p>
                            <p className="blog-desc">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                            <a href="#/">Continue Reading </a>
                        </div>
                        <div className='imgwithtime'>
                            <img src="https://preview.colorlib.com/theme/fashe/images/blog-03.jpg" alt="" />
                            <p className='bgblack'>28 DEC,2018</p>
                        </div>
                        <div className='blog-disc'>
                            <h2 className='blog-title'>Black Friday Guide: Best Sales & Discount Codes</h2>
                            <p className='admin'>By Admin | cooking ,Food | 8 Comments </p>
                            <p className="blog-desc">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius</p>
                            <a href="#/">Continue Reading </a>
                        </div>

                        <button className='btn1'>1</button>
                        <button className='btn2'>2</button>
                    </div>
                    <div className="right">
                        <div className='pos-relative'>.
                            <input type="text" className="s-text7" name='search-product' placeholder='Search' />
                            <button className="flex-c-m">
                                <FaSearch></FaSearch>
                            </button>
                        </div>
                        <h4 className='right-title'>Catagories</h4>
                        <ul>
                            <li className='bo6'>
                                <a href="#/">Fashion</a>
                            </li>
                            <li className='bo6'>
                                <a href="#/">Beauty</a>
                            </li>
                            <li className='bo6'>
                                <a href="#/">Street Style</a>
                            </li>
                            <li className='bo6'>
                                <a href="#/">Life Style</a>
                            </li>
                            <li className='bo6'>
                                <a href="#/">DIY & Craft</a>
                            </li>
                        </ul>
                        <h4 className='right-title'>Featured Product</h4>
                        <ul>
                            <li>
                                <div className='flex-w'>
                                    <a href="">
                                        <img src="https://preview.colorlib.com/theme/fashe/images/item-16.jpg.webp" alt="" />
                                    </a>
                                    <div className='w-size'>
                                        <a href="">White Shirt with Pleat Detail Back</a>
                                        <span>$19.00</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                            <div className='flex-w'>
                                    <a href="">
                                        <img src="https://preview.colorlib.com/theme/fashe/images/item-17.jpg" alt="" />
                                    </a>
                                    <div className='w-size'>
                                        <a href="">Converse All Star Hi Black Canvas</a>
                                        <span>$39.00</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                            <div className='flex-w'>
                                    <a href="">
                                        <img src="https://preview.colorlib.com/theme/fashe/images/item-08.jpg.webp" alt="" />
                                    </a>
                                    <div className='w-size'>
                                        <a href="">Nixon Porter Leather Watch In Tan</a>
                                        <span>$17.00</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                            <div className='flex-w'>
                                    <a href="">
                                        <img src="https://preview.colorlib.com/theme/fashe/images/item-03.jpg" alt="" />
                                    </a>
                                    <div className='w-size'>
                                        <a href="">Denim jacket blue</a>
                                        <span>$39.00</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                            <div className='flex-w'>
                                    <a href="">
                                        <img src="https://preview.colorlib.com/theme/fashe/images/item-05.jpg" alt="" />
                                    </a>
                                    <div className='w-size'>
                                        <a href="">Nixon Porter Leather Watch In Tan</a>
                                        <span>$17.00</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <h4 className='right-title'>Archive</h4>
                        <ul>
                            <li className='flex-sb-m'>
                                <a href="#/">July 2023</a>
                                <span className='s-text10'> (9) </span>
                            </li>
                            <li className='flex-sb-m'>
                                <a href="#/">June 2023</a>
                                <span className='s-text10'> (39) </span>
                            </li>
                            <li className='flex-sb-m'>
                                <a href="#/">may 2023</a>
                                <span className='s-text10'> (29) </span>
                            </li>
                            <li className='flex-sb-m'>
                                <a href="#/">April 2023</a>
                                <span className='s-text10'> (35) </span>
                            </li>
                            <li className='flex-sb-m'>
                                <a href="#/">March 2023</a>
                                <span className='s-text10'> (22) </span>
                            </li>
                            <li className='flex-sb-m'>
                                <a href="#/">February 2023</a>
                                <span className='s-text10'> (32) </span>
                            </li>
                            <li className='flex-sb-m'>
                                <a href="#/">january 2023</a>
                                <span className='s-text10'> (21) </span>
                            </li>
                            <li className='flex-sb-m'>
                                <a href="#/">December 2022</a>
                                <span className='s-text10'> (26) </span>
                            </li>
                        </ul>
                        <h4 className='right-title'>Tags</h4>
                        <div className="wrap-tags">
                            <a href="/" className="tag-item">Fashion</a>
                            <a href="/" className="tag-item">LIfeStyle</a>
                            <a href="/" className="tag-item">Demin</a>
                            <a href="/" className="tag-item">Streetstyle</a>
                            <a href="/" className="tag-item">Crafts</a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Blog