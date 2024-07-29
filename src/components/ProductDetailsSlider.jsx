"use client";
import EmblaCarousel from "./productSlider/EmblaCarousel";

const OPTIONS = { dragFree: false, direction: "rtl", loop: true };
const SLIDE_COUNT = 4;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const SLIDES = [
  {img: "/images/01.jpg"},
  {img: "/images/02.jpg"},
  {img: "/images/03.jpg"},
  {img: "/images/04.jpg"},
]

const ProductDetailsSlider = () => {
    return (
        <div className="flex-1 py-4 flex justify-center px-6">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    );
}

export default ProductDetailsSlider;