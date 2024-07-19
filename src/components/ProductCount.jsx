"use client"
import { SquareCheckBig } from "lucide-react";
import { useState } from "react";

const ProductCount = () => {

    const [count, setCount] = useState(1)

    const plusHandler = ()=>{
        if(count >= 5){
            alert("حداکثر تعداد سفارش 5 بسته می باشد")
            return
        }
        setCount((prev)=>prev+1)
    }
    const minusHandler = ()=>{
        if(count <= 1){
            alert("حداقل تعداد سفارش 1 بسته می باشد")
            return
        }
        setCount((prev)=>prev-1)
    }

    return (
        <div className="mt-4 flex items-center justify-between text-red-600">
        <div className="flex gap-1 sm:gap-2 ">
          <SquareCheckBig size={18} />
          <p className=" text-sm sm:text-base tracking-tighter sm:tracking-normal">این محصول قابلیت چاپ دارد</p>
        </div>
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
            {count}
          </button>
          <button
          onClick={minusHandler}
            type="button"
            className="w-[45px] sm:w-[60px] text-base font-medium rounded-l-md text-black bg-gray-100 hover:bg-gray-100 px-4 py-2"
          >
            -
          </button>
        </div>
      </div>
    );
}

export default ProductCount;