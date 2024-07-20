import Image from "next/image";

const data = [
  { img: "/images/10.jpg" },
  { img: "/images/07.jpg" },
  { img: "/images/08.jpg" },
  { img: "/images/09.jpg" },
  { img: "/images/10.jpg" },
];

const Suggest = () => {
  return (
    <div className="flex flex-col bg-white rounded-xl p-4 gap-4">
      <p className="text-emerald-500 text-sm sm:text-base font-semibold">
        خریداران این محصول، محصولات زیر را هم خریده اند
      </p>
      <div className="flex justify-center gap-1 sm:gap-4 px-2">
        {data.map((item, index) => (
          <div className="flex flex-col items-center justify-center gap-2 " key={index}>
            <Image src={item.img} alt="" width={35} height={35} className="w-[80px] border border-gray-200 rounded-xl p-1" />
            <span className="p-1 text-sm sm:text-base rounded-lg bg-gray-100 text-emerald-500 px-4">زنبوری</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggest;
