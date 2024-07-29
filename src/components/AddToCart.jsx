"use client"
import { useAppContext } from "@/context";
import { Button } from "./ui/button";
import AddToCartCount from "./AddToCartCount";


const AddToCart = () => {

    const { productCount, setProductCount } = useAppContext();

    return (
        <div>
            
            <div className="bg-white w-full fixed mt-4 text-left p-3 sm:hidden left-0 bottom-0 z-10 border-t shadow-[2px_-1px_9px_-1px_rgba(0,0,0,0.1)]">

                <div className="flex items-center justify-between">

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

                    <div className="flex items-center justify-center gap-1">
                        <span>27,606,000</span>
                        <span className="text-xs tracking-tighter">تومان</span>
                    </div>

                </div>


            </div>
            

        </div>

    );
}

export default AddToCart; 