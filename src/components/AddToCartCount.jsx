"use client"
import { useAppContext } from "@/context";
import { SquareCheckBig } from "lucide-react";
import { useState } from "react";

const AddToCartCount = () => {

  const { productCount, setProductCount } = useAppContext();

  // const [count, setCount] = useState(0)

  const plusHandler = () => {
    if (productCount >= 5) {
      alert("حداکثر تعداد سفارش 5 بسته می باشد")
      return
    }
    setProductCount((prev) => prev + 1)
  }
  const minusHandler = () => {
    if (productCount <= 0) {
      alert("حداقل تعداد سفارش 1 بسته می باشد")
      return
    }
    setProductCount((prev) => prev - 1)
  }

  return (

      <div className="flex items-center">
        <button
          onClick={plusHandler}
          type="button"
          className="w-[45px] sm:w-[60px] text-base font-medium rounded-r-md text-black bg-gray-100 hover:bg-gray-100 px-4 py-2"
        >
          +
        </button>
        <button
          type="button"
          className="w-[45px] sm:w-[60px] border-l border-r text-base font-medium text-black bg-gray-100 hover:bg-gray-100 px-4 py-2"
        >
          {productCount}
        </button>
        <button
          onClick={minusHandler}
          type="button"
          className="w-[45px] sm:w-[60px] text-base font-medium rounded-l-md text-black bg-gray-100 hover:bg-gray-100 px-4 py-2"
        >
          -
        </button>
      </div>
  );
}

export default AddToCartCount;