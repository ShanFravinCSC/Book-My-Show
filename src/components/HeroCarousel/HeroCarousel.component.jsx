import React from "react"
import HeroSlider from "react-slick"

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () =>{

//for pc screen
const settingsLG = {
    arrows: true,
    autoplay: true,
    centermode: true,
    centerPadding: "300px",
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
};
//for tab and mobile screen
const settings = {
    arrows:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      "https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
  ];
    return(
        <>
            <div className="lg:hidden">
            <HeroSlider {...settings}>
                {
                    images.map((image) => (
                        <div className="w-full h-56 md:h-80 py-3">
                            <img src={image} alt="testing" className="w-full h-full" />
                        </div>
                    ))
                }
            </HeroSlider>
            </div>

            <div className="hidden lg:block">
            <HeroSlider {...settingsLG}>
                {
                    images.map((image) => (
                        <div className="w-full h-96 px-2 py-3">
                            <img src={image} alt="testing" className="w-full h-full rounded-md" />
                        </div>
                    ))
                }
            </HeroSlider>
            </div>
        </>
    );
}

export default HeroCarousel;