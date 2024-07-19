"use client";
import { toFarsiNumber } from "@/lib/PersianNumber";
import { Button } from "./ui/button";
import { useState } from "react";
import clsx from "clsx";
import { ComboboxDemo } from "./ComboBox";

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
    <div>
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
      <div>
        <div>
          <ComboboxDemo />
        </div>
        <div></div>
      </div>
      {/* Select Boxes */}


    </div>
  );
};

export default Details;
