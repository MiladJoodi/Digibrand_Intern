import Image from "next/image";
import { Button } from "./ui/button";
import { SquareArrowDown } from "lucide-react";

const InfoSection = () => {
  return (
    <section className="flex items-center">
      {/* Sefaresh Chap */}
      <div className="flex gap-4 bg-white rounded-xl p-4">
        <div className=" overflow-hidden flex justify-center items-center">
          <Image src="/images/05.jpg" alt="" width={100} height={100} className="rounded-lg object-cover" />
        </div>
        <div className="flex flex-col gap-2 sm:gap-4 justify-between">
          <h4 className="text-emerald-500 text-lg font-bold">سفارش چاپ</h4>
          <p className="text-sm sm:text-base tracking-tighter text-justify">امکان سفارش چاپ اختصاصی در تعداد کم برای این محصول وجود دارد.</p>
          <button className="flex items-center justify-center gap-1 font-bold text-green-800 self-end ">
            مشاهده جزئیات
            <SquareArrowDown size={18} />
          </button>
          
        </div>
      </div>

      {/* Kraft Chist */}
      <div></div>
    </section>
  );
};

export default InfoSection;
