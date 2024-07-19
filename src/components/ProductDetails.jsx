"use client";
import EmblaCarousel from "./productSlider/EmblaCarousel";

const OPTIONS = { dragFree: true, direction: "rtl", loop: true };
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const ProductDetails = () => {
  return (
    <div className="bg-white rounded-xl flex flex-col md:flex-row">
      {/* Slider */}
      <div className="flex-1 p-4 bg-green-100 px-12">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>

      <div className="flex-1">
        details
      </div>

    </div>
  );
};

export default ProductDetails;
