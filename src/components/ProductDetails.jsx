import Details from "./Details";
import ProductDetailsSlider from "./ProductDetailsSlider";

async function getData() {
  const res = await fetch("https://mocki.io/v1/9b77ffac-4894-4484-80fb-122d54268158")
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
