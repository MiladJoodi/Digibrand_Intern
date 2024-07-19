import Image from "next/image";
import { Button } from "./ui/button";
import { SquareArrowDown } from "lucide-react";

const InfoSection = () => {
  return (
    <section className="flex items-center">
      {/* Sefaresh Chap */}
      <div className="flex flex-col sm:flex-row gap-4 bg-white rounded-xl p-4">
        <div className=" overflow-hidden flex justify-center items-center">
          <Image
            src="/images/05.jpg"
            alt=""
            width={100}
            height={100}
            className="rounded-lg object-cover w-full"
          />
        </div>
        <div className="flex flex-col gap-2 sm:gap-4 justify-between">
          <h4 className="text-emerald-500 text-lg font-bold">سفارش چاپ</h4>
          <p className="text-sm sm:text-base tracking-tighter text-justify">
            امکان سفارش چاپ اختصاصی در تعداد کم برای این محصول وجود دارد.
          </p>
          <button className="flex items-center justify-center gap-1 font-bold text-green-800 self-end cursor-pointer">
            مشاهده جزئیات
            <SquareArrowDown size={18} />
          </button>
        </div>
      </div>

      {/* Kraft Chist */}
      <div className="flex gap-4 bg-white rounded-xl p-4">
        <h4 className="text-emerald-500 text-lg font-bold">پاکت کرافت چیست</h4>
        <p>
          پاکت کاغذی کرافت که با نام‌های پاکت کاهی و پاکت قهوه ای نیز شناخته
          می‌شود، در واقع از همان کاغذ کرافت معمولی ساخته می‌شود. در گفتگوی
          عامیانه برخی به این پاکت، پاکت گرافت می‌گویند؛ اما در اصل کرافت، درست
          است نه گرافت. این محصول مواد شیمیایی خطرناکی ندارد، هیچ‌گونه رنگ
          افزودنی ندارد، طعم و عطر خاصی ندارد، سازگار با محیط‌زیست است و آلودگی
          ایجاد نمی‌کند. پاکت بسته بندی گراف برای انواع مواد غذایی مثل شیرینی،
          نان، میوه، آجیل، خشکبار، محصولات دست‌ساز و دکوراتیو، لوازم آرایشی و
          بهداشتی و انواع محصولات دیگر به کار برده می‌شود. پاکت یکی از شیک‌ترین
          بسته بندی ها برای محصولات محسوب می‌شود که در جلب نظر مشتری تأثیر به
          سزایی دارد و موجب افزایش حجم فروش خواهد شد. وزن سبک، مقاوم‌بودن،
          انعطاف‌پذیری و قیمت ارزان پاکت کاهی، آن را از سایر لوازم بسته بندی
          متمایز کرده است و نظر کسانی که در توزیع محصولات مختلف فعالیت دارند را
          به خود جلب کرده است.
        </p>
      </div>
    </section>
  );
};

export default InfoSection;
