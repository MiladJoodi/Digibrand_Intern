"use client";
import { toFarsiNumber } from "@/lib/PersianNumber";
import { Button } from "./ui/button";
import { useState } from "react";
import clsx from "clsx";
import { SelectSizeComboBox } from "./SelectSizeComboBox";
import { SelectWeightComboBox } from "./SelectWeightComboBox";
import { Accordion } from "./ui/accordion";
import ProductAccordion from "./ProductAccordion";
import { SquareCheckBig } from "lucide-react";

const data = [
  { id: 1, color: "bg-red-400" },
  { id: 2, color: "bg-zinc-200" },
  { id: 3, color: "bg-indigo-200" },
  { id: 4, color: "bg-violet-200" },
  { id: 5, color: "bg-stone-200" },
];

const Details = () => {
  const [selectedColor, setSelectedColor] = useState(1);

  return (
    <div className="p-4">
      <p>پاکت کرافت 27cm x 36cm بسته 25 عددی</p>
      {/* Select Color */}
      <div className="flex gap-6">
        {data.map((item) => {
          return (
            <button
              onClick={() => setSelectedColor(item.id)}
              className={`w-5 h-5 rounded-full ${item.color} ${
                selectedColor == item.id
                  ? `ring-1 ring-opacity-50 ring-offset-2 ring-slate-400`
                  : ""
              }`}
              key={item.id}
            ></button>
          );
        })}
      </div>

      {/* Price */}
      <div className="flex gap-4">
        <p>قیمت هر کیلو:</p>
        <p className="flex gap-2">
          <span className="text-emerald-600">94,300</span>
          <span>تومان</span>
        </p>
      </div>

      {/* Level */}
      <div className="flex text-xs sm:text-sm gap-2">
        <p>سطح رضایت خریداران:</p>
        <p className="text-emerald-600">(98%) عالی 😊</p>
        <p className="text-sky-500">21 دیدگاه ثبت شده</p>
      </div>
      {/* Level */}

      {/* Select Boxes */}
      <div className="flex gap-4 justify-between sm:justify-normal">
        <SelectWeightComboBox />
        <SelectSizeComboBox />
      </div>
      {/* Select Boxes */}

      {/* Accordion */}
      <div>
        <ProductAccordion />
      </div>
      {/* Accordion */}

      {/* Plus and Minus Buttons */}
      <div className="flex items-center gap-4 justify-between sm:justify-normal">
        <div className="flex items-center gap-2 text-red-600 text-sm">
          <SquareCheckBig size={18} />
          این محصول قابلیت چاپ دارد
        </div>
        <div className="inline-flex rounded-lg shadow-sm">
            <Button
              type="button"
              class="w-[50px] py-2 px-3 inline-flex justify-center items-center gap-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-gray-100 text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            >
              +
            </Button>
            <Button
              type="button"
              class="w-[50px] py-2 px-3 inline-flex justify-center items-center gap-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-gray-100 text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            >
              4
            </Button>
            <Button
              type="button"
              class="w-[50px] py-2 px-3 inline-flex justify-center items-center gap-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-gray-100 text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            >
              -
            </Button>
        </div>
      </div>
      {/* Plus and Minus Buttons */}
    </div>
  );
};

export default Details;
