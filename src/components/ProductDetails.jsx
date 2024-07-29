import Details from "./Details";
import ProductDetailsSlider from "./ProductDetailsSlider";

async function getData() {
  const res = await fetch("https://mocki.io/v1/4bc690c1-2f45-4062-988c-15935325d1b6")
  return res.json();
}

const ProductDetails = async  () => {
  const data = await getData();

  return (
    <div className="bg-white rounded-xl flex flex-col md:flex-row">
      {/* Slider */}
      <ProductDetailsSlider />

      <div className="flex-1">
        <Details productInfo={data} />
      </div>

    </div>
  );
};

export default ProductDetails;
