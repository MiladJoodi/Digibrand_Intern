"use client"
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const data = [
    { img: "/images/10.jpg" },
    { img: "/images/07.jpg" },
    { img: "/images/08.jpg" },
    { img: "/images/09.jpg" },
    { img: "/images/10.jpg" },
    { img: "/images/10.jpg" },
    { img: "/images/07.jpg" },
    { img: "/images/08.jpg" },
    { img: "/images/09.jpg" },
    { img: "/images/10.jpg" },
];

const SuggestSlider = () => {
    const [display, setDisplay] = useState(true);
    const [width, setWidth] = useState("w-full");

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 7,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 5,
                }
            }
        ]
    };
    return (
        <div className="slider-container bg-white rounded-xl p-3">
            <div className=""
                style={{
                    width: width + "px",
                    display: display ? "block" : "none"
                }}
            >
                <p className="text-emerald-500 text-sm sm:text-base font-semibold mt-2 mb-4">
                    خریداران این محصول، محصولات زیر را هم خریده اند
                </p>
                <Slider {...settings}>
                    {data.map((item, index) => (
                        <div className="!flex flex-col items-center justify-center gap-2 text-center" key={index}>
                            <Image src={item.img} alt="" width={120} height={120} className="w-[120px] border border-gray-200 rounded-xl p-1" />
                            <span className="text-sm sm:text-base rounded-lg bg-gray-100 text-emerald-500 py-1 px-2 sm:px-4">زنبوری</span>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default SuggestSlider;