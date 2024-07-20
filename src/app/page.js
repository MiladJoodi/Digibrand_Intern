import Comments from "@/components/Comments";
import InfoSection from "@/components/InfoSection";
import ProductDetails from "@/components/ProductDetails";
import Suggest from "@/components/Suggest";
import Image from "next/image";

export default function Home() {
  return (
   <section className="flex flex-col gap-6 my-6">
    <ProductDetails />
    <InfoSection />
    <Suggest />
    <Comments />
   </section>
  );
}
