"use client";
import { toFarsiNumber } from "@/lib/PersianNumber";
import { Button } from "./ui/button";
import { useState } from "react";
import clsx from "clsx";

const data = [
  { id: 1, color: "red-400" },
  { id: 2, color: "zinc-200" },
  { id: 3, color: "indigo-200" },
  { id: 4, color: "violet-200" },
  { id: 5, color: "stone-200" },
];

const Details = () => {
  const [selectedColor, setSelectedColor] = useState(1);

  return (
    <div>
      <p>پاکت کرافت 27cm x 36cm بسته 25 عددی</p>
      <div className="flex gap-5">
        {data.map((item) => {
          return (
            <button
              onClick={() => setSelectedColor(item.id)}
              className={`w-5 h-5 rounded-full bg-${item.color} ${
                selectedColor == item.id
                  ? `ring-1 ring-opacity-50 ring-offset-2 ring-slate-400`
                  : ""
              }`}
              key={item.id}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default Details;
