"use client"
import { useAppContext } from "@/context";
import { SquareCheckBig } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import AddToCartCount from "./AddToCartCount";

const ProductCount = () => {

  const { productCount, setProductCount } = useAppContext();

  // const [count, setCount] = useState(0)

  // const plusHandler = () => {
  //   if (productCount >= 5) {
  //     alert("حداکثر تعداد سفارش 5 بسته می باشد")
  //     return
  //   }
  //   setProductCount((prev) => prev + 1)
  // }
  // const minusHandler = () => {
  //   if (productCount <= 0) {
  //     alert("حداقل تعداد سفارش 1 بسته می باشد")
  //     return
  //   }
  //   setProductCount((prev) => prev - 1)
  // }

  return (
    <div className="mt-4 flex items-center justify-between text-red-600">
      <div className="flex gap-1 sm:gap-2 ">
        <SquareCheckBig size={18} />
        <p className=" text-sm sm:text-base tracking-tighter sm:tracking-normal">این محصول قابلیت چاپ دارد</p>
      </div>
      <div className="">
                        {productCount === 0 ? (
                            <Button
                                onClick={() => setProductCount((prev) => prev + 1)}
                                className="bg-red-600 text-white px-8 rounded-lg opacity-90 text-sm">
                                افزودن به سبد خرید
                            </Button>
                        ) : (
                            <AddToCartCount />
                        )}


                    </div>
    </div>
  );
}

export default ProductCount;