"use client";
import Contact from "@/app/components/Contact";
import ProductCard from "@/app/components/ProductCard";
import { categories } from "@/data";
import { getCategoryBasedProducts } from "@/utils";
import { result } from "lodash";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function CategoryPage() {
  const [products, setProducts] = useState([]);
  const pathName = usePathname();
  const categoryNameArray = pathName.split("/");
  const productsCategory = categoryNameArray[categoryNameArray.length - 1];

  useEffect(() => {
    const result = getCategoryBasedProducts(productsCategory);
    setProducts(result);
  }, [productsCategory]);

  return (
    <>
      <header className="h-[500px] bg-center flex flex-col-reverse bg-cover w-full bg-[url('/header.webp')]"></header>
      <main>
        {/* Product section start */}
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
            {/* categories  */}
          <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
            {categories.map((category) => {
              const categoryName = category.name.toLowerCase();
              if (categoryName === productsCategory) {
                return (
                  <Link
                    href={`/category/${categoryName}`}
                    key={category.id}
                    className="hover:border-b border-black block h-6 box-border mt-5 text-blue-600 font-bold"
                  >
                    {category.name}
                  </Link>
                );
              } else {
                return (
                  <Link
                    href={`/category/${categoryName}`}
                    key={category.id}
                    className="hover:border-b border-black block h-6 box-border mt-5"
                  >
                    {category.name}
                  </Link>
                );
              }
            })}
          </div>
            {/* products  */}
          <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
            {products.length > 0 &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </section>
        <Contact />
      </main>
    </>
  );
}
