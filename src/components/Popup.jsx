import { FaCircleExclamation } from "react-icons/fa6";

const Popup = () => {
  return (
    <div className="flex items-center gap-3 px-2 sm:px-8 text-xs sm:text-base py-3 popupGreen text-white rounded-xl sm:tracking-wide">
      <FaCircleExclamation size={20} />
      <p>قیمت هر بسته با افزایش میزان سفارش شما، کاهش می یابد</p>
    </div>
  );
};

export default Popup;
