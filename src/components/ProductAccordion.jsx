import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductAccordion = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>اطلاعات محصول</AccordionTrigger>
        <AccordionContent>
          <p className="text-justify indent-5 leading-7">
            پاکت کرافت بدون دسته کاربردهای متنوعی در بسته بندی دارد. از این پاکت
            ها برای بسته بندی نان، لباس، مواد غذایی، فست فود، میوه و... استفاده
            می‌شود. همچنین امکان چاپ این پاکت ها نیز در تورنگ امکان‌پذیر است.
            برای سفارش چاپ می‌توانید به‌صورت آنلاین سفارش خود را ثبت کنید. تنها
            کافی است در هنگام تکمیل خرید گزینه برای این محصول سفارش چاپ نیز
            دارم را انتخاب کنید و سپس فایل طراحی خود را آپلود کنید. همچنین
            امکان طراحی اختصاصی برای برند شما نیز در مجموعه ما امکان‌پذیر است.
            شما می‌توانید این پاکت را با تخفیف پلکانی و با قیمت بسیار مناسب تهیه
            کنید و بسته بندی شیک و جذابی داشته باشید. تمامی محصولات ما در بسته
            بندی های کیپ و ضد آب ارسال می‌شوند تا سفارشات بدون هیچ پارگی و خرابی
            به دست مشتری برسند.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductAccordion;
