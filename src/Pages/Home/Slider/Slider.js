import React from 'react';
import image from '../../../images/iphone.jpg'

const Slider = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                    <div className="carousel">
                        <div id="slide1" className="carousel-item relative w-full" style={{backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ih1ngz3CTR3Ts6E8wQCva5k68l1WYu5WXw&usqp=CAU')`}}>
                            {/* <img src={image} alt='' className="w-full" /> */}
                            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/5n2kT5C/iphone.jpg")` }}>
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="hero-content text-center text-neutral-content">
                                        <div className="max-w-md">
                                        <h1 className="mb-5 text-5xl font-bold">Welcome To Mobile World</h1>
                                        <p className="mb-5">H.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle ">❮</a> 
                            <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="slide2" className="carousel-item relative w-full">
                            {/* <img src="https://placeimg.com/800/200/arch" alt='' className="w-full" /> */}
                            <div className="hero" style={{ backgroundImage: `url("https://i.ibb.co/DGxNSZv/samsung.jpg")` }}>
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="hero-content text-center text-neutral-content">
                                    <div className="max-w-md">
                                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle w-">❮</a> 
                            <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="slide3" className="carousel-item relative w-full">
                            {/* <img src="https://placeimg.com/800/200/arch" alt='' className="w-full" /> */}
                            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/nnbWFCr/mobile.jpg")` }}>
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="hero-content text-center text-neutral-content">
                                    <div className="max-w-md">
                                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a> 
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="slide4" className="carousel-item relative w-full">
                            {/* <img src="https://placeimg.com/800/200/arch" alt='' className="w-full" /> */}
                            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/VTCLYQP/onePlus.jpg")` }}>
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="hero-content text-center text-neutral-content">
                                    <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        
                                    </div>
                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a> 
                            <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    
    );
};

export default Slider;