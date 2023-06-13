import React from 'react'
import './About.css'

const About = () => {
    return (
        <section className='bg'> 
            <section className="bg-title-page">
                <h2 className="l-text2">About</h2>
            </section>
            <section className='background'>
                <div className="container">
                <div className="rows">
                    <div className="col-md-4 p-b-30">
                        <div className="imgsection">
                            <img src="https://preview.colorlib.com/theme/fashe/images/banner-14.jpg.webp" alt="" />
                        </div>
                    </div>
                    <div className="aboutdes">
                        <h3 className='m-text26 p-t-15 p-6-6'>Our Story</h3>
                        <p className='pb28'>
                            Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.
                        </p>
                        <div className="b013">
                            <p className="pb11">
                                Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.
                            </p>
                            <span className='s-text7'>
                                - Steve Jop's
                            </span>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </section>
    )
}

export default About