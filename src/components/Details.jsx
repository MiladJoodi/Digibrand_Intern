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
import ProductCount from "./ProductCount";
import AddToCart from "./AddToCart";

const data = [
  { id: 1, color: "bg-red-400" },
  { id: 2, color: "bg-zinc-200" },
  { id: 3, color: "bg-indigo-200" },
  { id: 4, color: "bg-violet-200" },
  { id: 5, color: "bg-stone-200" },
];


const Details = ({ productInfo }) => {
  const [selectedColor, setSelectedColor] = useState(1);
  const { title, price, consent, colors } = productInfo[0];

  return (
    <div className="flex flex-col gap-4 sm:gap-6 px-4 py-8">
      {/* Title */}
      <p className="text-lg sm:text-xl">{title}</p>
      {/* Select Color */}
      <div className="flex gap-6">
        {data.map((item) => {
          return (
            <button
              onClick={() => setSelectedColor(item.id)}
              className={`w-5 h-5 rounded-full ${item.color} ${selectedColor == item.id
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
          <span className="text-emerald-600">{price}</span>
          <span>تومان</span>
        </p>
      </div>

      {/* Level */}
      <div className="flex text-xs sm:text-sm gap-2">
        <p>سطح رضایت خریداران:</p>
        <p className="text-emerald-600">({consent}) عالی 😊</p>
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
      <div className="flex flex-col">
        <ProductCount />
        <AddToCart price={price} />
      </div>

    </div>
  );
};

export default Details;
