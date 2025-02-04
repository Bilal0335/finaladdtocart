"use client";
import { IProduct } from "@/app/utils/Types";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";

// Adding key prop in star array
const star = [
  <FaStar key={1} />,
  <FaStar key={2} />,
  <FaStar key={3} />,
  <FaStar key={4} />,
  <FaStar key={5} />
];

export default function Products() {
  const products: IProduct[] = useSelector((state: any) => state.product);

  return (
    <main className="mt-28">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-around">
        {products.map((data: any, i: any) => {
          return (
            <div key={i} className=" flex-shrink-0  w-[283px] ">
              <Link href={`/product/${data.slug}`}>
                <div className=" md:w-[283px]  h-[290px] bg-[#F0EEED] rounded-[20px]">
                  <Image
                    src={data.image[0]}
                    alt={data.title}
                    className="w-[290px] h-[290px] rounded-[20px]"
                    width={100}
                    height={100}
                  />
                </div>
              </Link>
              <div className="pl-2">
                <p className="lg:text-lg mt-2 font-bold">{data.title}</p>
                <div className="flex text-yellow-400">
                  {star.map((icon, index) => (
                    <span key={index}>{icon}</span>
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <p className="font-bold  ">{data.price} </p>
                  <span className="text-gray-400 line-through">
                    {data.discount > 0 &&
                      data.price - (data.price * data.discount) / 100}{" "}
                  </span>
                  {/* <span className="bg-red-400 rounded-[10px]">{data.discount >0 && (<div>{`-${data.discount}%`}</div>)}</span> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
