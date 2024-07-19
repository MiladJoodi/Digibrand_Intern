import Image from "next/image";

const data = [
  { img: "/images/06.jpg" },
  { img: "/images/07.jpg" },
  { img: "/images/08.jpg" },
  { img: "/images/09.jpg" },
  { img: "/images/10.jpg" },
];

const Suggest = () => {
  return (
    <div className="bg-white rounded-xl p-4">
      <p className="text-emerald-500 text-sm sm:text-base">
        خریداران این محصول، محصولات زیر را هم خریده اند
      </p>
      <div className="grid grid-cols-5 gap-2">
        {data.map((item, index) => (
          <div className="flex flex-col items-center justify-center gap-2 border border-gray-300 rounded-lg" key={index}>
            <Image src={item.img} alt="" width={60} height={60} />
            <span className="p-1 rounded-lg bg-slate-200 text-emerald-500">کاغذ زنبوری</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggest;
