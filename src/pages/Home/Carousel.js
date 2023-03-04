import React from 'react';
import bike1 from '../../image/bike1.jpg';
import bike2 from '../../image/bike2.jpg';

const Carousel = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products-category');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="carousel w-full h-[100vh]">
      <div id="slide1" className="carousel-item relative w-full">
        <div
          className="w-full h-full flex justify-center items-center bg-cover"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1)), url(${bike1})`
          }}
        >
          <div className="flex flex-col">
            <p
              data-aos="flip-left"
              data-aos-delay="100"
              className="p-3 text-center text-3xl md:text-6xl font-bold text-white font-quicksand"
            >
              BEST QUALITY PERFORMANCE BIKE
            </p>
            <p data-aos="flip-left" data-aos-delay="300" className='p-3 text-center md:text-xl font-bold text-white font-quicksand'>
              Get ready to experience the thrill of the ride with our top-of-the-line bikes!
            </p>
            <button onClick={scrollToProducts} data-aos="zoom-in" data-aos-delay="200" className="mt-4 bg-white hover:bg-white/70 text-gray-900 px-6 py-2 rounded-full font-bold tracking-wide shadow-lg hover:shadow-xl transition-colors duration-300">
              Browse Category
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div
          className="w-full h-full flex justify-center items-center bg-cover"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1)), url(${bike2})`
          }}
        >
          <div className="flex flex-col">
            <p
              data-aos="flip-left"
              data-aos-delay="100"
              className="p-3 text-center text-3xl md:text-6xl font-bold text-white font-quicksand"
            >
              Quality bikes for every adventure.
            </p>
            <p data-aos="flip-left" data-aos-delay="300" className='p-3 text-center md:text-xl font-bold text-white font-quicksand'>
              Get ready to experience the thrill of the ride with our top-of-the-line bikes!
            </p>
            <button onClick={scrollToProducts} data-aos="zoom-in" data-aos-delay="200" className="mt-4 bg-white hover:bg-white/70 text-gray-900 px-6 py-2 rounded-full font-bold tracking-wide shadow-lg hover:shadow-xl transition-colors duration-300">
              Browse Category
            </button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* 
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img2} alt='' className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://placeimg.com/800/200/arch" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div> 
      */}
    </div>
  );
};

export default Carousel;
