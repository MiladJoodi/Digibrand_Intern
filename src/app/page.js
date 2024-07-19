import ProductDetails from "@/components/ProductDetails";
import Image from "next/image";

export default function Home() {
  return (
   <section className="flex flex-col gap-6 my-6">
    <ProductDetails />

   </section>
  );
}
