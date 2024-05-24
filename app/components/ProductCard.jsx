import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${product.thumbnail})` }}
        className={`relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8]  bg-cover bg-center transition-all duration-3000 ease-in-out transform`}
      ></div>
      <h2 className="text-sm lg:text-base mt-2">
        <Link href={`/products/${product.id}`} className="text-base font-bold">
          {product.title}
        </Link>
        <span className="text-[#919090]">
          <Link href={`/category/${product.category}`}>
            ({product.category})
          </Link>
        </span>
      </h2>
      <p className="text-[#919090] text-sm ">{product.description}</p>
      <p className="text-rose-600 text-sm mt-4">
        <span className="text-[#919090] line-through">
          ${(product.price + 5).toFixed(2)}
        </span>{" "}
        ${product.price}
      </p>
    </div>
  );
}
