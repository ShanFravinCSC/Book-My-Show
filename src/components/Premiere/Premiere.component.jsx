import React from 'react'
import Slider from 'react-slick';

//components
import Poster from '../Poster/poster.component';

export const Premiere = () => {

    const settings = {
        infinite: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        InitialSlide: 0,
        responsive: [
            {
            breakpoints: 1024,
            settings: {
                slidesToShow:3,
                slidesToScroll:2,
                infinite: true,
            },
        },
        {
            breakpoints: 600,
            settings: {
                slidesToShow:2,
                slidesToScroll:1,
                InitialSlide: 1,
            },
        },
        {
            breakpoints: 480,
            settings: {
                slidesToShow:2,
                slidesToScroll:1,
            },
        },
    ],
};

const PremiereImages = [
    {
        src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-xeszthqxah-portrait.jpg",
        alt:"zack",
        title: "Zacl",
        subtitle: "english",
    },
    {
        src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-xeszthqxah-portrait.jpg",
        alt:"zack",
        title: "Zacl",
        subtitle: "english",
    },
    {
        src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-xeszthqxah-portrait.jpg",
        alt:"zack",
        title: "Zacl",
        subtitle: "english",
    },
    {
        src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-xeszthqxah-portrait.jpg",
        alt:"zack",
        title: "Zacl",
        subtitle: "english",
    },
    {
        src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-xeszthqxah-portrait.jpg",
        alt:"zack",
        title: "Zacl",
        subtitle: "english",
    },
    {
        src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-xeszthqxah-portrait.jpg",
        alt:"zack",
        title: "Zacl",
        subtitle: "english",
    },
];

    return (
        <>
            <Slider {...settings}>
                {PremiereImages.map((image) =>( 
                <Poster {...image} /> 
                ))}
            </Slider>
        </>
    );
};

export default Premiere
