"use client";
import { IProduct } from "@/app/utils/Types";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
// import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
// import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addtocart } from "../../Redux/features/cartSlice";
// import { useSelector } from "react-redux";

const star = [
  <FaStar key={1} />,
  <FaStar key={2} />,
  <FaStar key={3} />,
  <FaStar key={4} />,
  <FaStar key={5} />
];

const product: IProduct[] = [
  {
    id: 1,
    title: "Rustic Vase Set",
    image: ["/img/image-1.png", "/img/image-2.png", "/img/image-3.png"], // Array of images
    slug: "rustic-vase-set",
    price: 210,
    category: "sofa",
    description:
      "Bring the charm of nature into your home with the Rustic Vase Set...",
    size: ["S", "M", "L", "XL"],
    color: ["RED", "BLACK", "YELLOW"],
    qty: 1,
    discount: 10
  },
  {
    id: 2,
    title: "Timber Craft",
    image: ["/img/image-2.png", "/img/image-3.png", "/img/image-3.png"], // Array of images
    slug: "timber-craft",
    price: 320,
    category: "sofa",
    description:
      "Introducing TimberCraft—a collection that celebrates the timeless beauty...",
    size: ["S", "M", "L", "XL"],
    color: ["RED", "BLACK", "YELLOW"],
    qty: 1,
    discount: 30
  }
];

// console.log("uuid", Math.floor(1000 + Math.random() * 9000));

const SLugProduct = ({ params }: { params: { slug: string } }) => {
  const dispatch = useDispatch();
  // const product: IProduct[] = useSelector((state: any) => state.product);
  // Find the product based on slug
  const item: any = product.find((item) => item.slug === params.slug);

  // usestate
  const [cartItem, setcartItem] = useState({
    id: item.id,
    title: item.title,
    image: item.image,
    slug: item.slug,
    price: item.price,
    size: item.size,
    color: item.color[0],
    qty: item.qty,
    discount: item.discount,
    description: item.description
  });

  // If no product is found, display a "Product not found" message
  if (!item) {
    return <h1 className="mt-36 text-red-500">Product not found</h1>;
  }

  return (
    <div className="mt-28 flex justify-around">
      {/* <h1>{item.title}</h1> */}
      <div className="space-y-3  w-[200px] flex flex-col items-center justify-center">
        {/* Render the product images if they exist */}
        {Array.isArray(item.image) &&
          item.image.map((img: any, index: any) => (
            <Image
              key={index}
              src={img}
              alt={item.title}
              width={100}
              height={100}
              className="rounded-md "
            />
          ))}
      </div>

      <div className="relative w-[500px] rounded-md flex justify-center">
        <Image
          src={item.image[0]}
          alt={cartItem.title}
          fill
          className="object-contain"
        />
      </div>

      <div className=" w-[500px] space-y-2">
        <h1 className="text-xl font-bold lg:text-3xl">{cartItem.title}</h1>
        <div className="flex text-yellow-400">
          {/* Render stars for product rating */}
          {star.map((icon, index) => (
            <span key={index}>{icon}</span>
          ))}
        </div>
        <p className="font-bold  ">{cartItem.price * cartItem.qty} </p>
        <span className="text-gray-400 line-through">
          {cartItem.discount > 0 &&
            (cartItem.price - (cartItem.price * cartItem.discount) / 100) *
              cartItem.qty}{" "}
        </span>
        {/* <span className="bg-red-400 rounded-[10px]">
          {cartItem.discount > 0 && <div>{`-${cartItem.discount}%`}</div>}
        </span> */}

        <div className="flex items-center space-x-2">
          {/* <p className="font-bold">${cartItem.price}</p> */}
          {/* {cartItem.discount && cartItem.discount > 0 && (
            <span className="text-gray-400 line-through">
              $
              {(
                cartItem.price -
                (cartItem.price * cartItem.discount) / 100
              ).toFixed(2)}
            </span>
          )} */}
        </div>
        <p>{cartItem.description}</p>
        {/* color */}
        <p>SELECT COLOR</p>
        <div className="space-x-3">
          {item.color.map((item: any, i: any) => (
            <button
              key={i}
              className="rounded-full active:outline w-[37px] h-[37px]"
              style={{ backgroundColor: item }}
              onClick={() => setcartItem({ ...cartItem, color: item })}
            ></button>
          ))}
        </div>
        {/* size */}
        {/* size */}
        <p>SELECT SIZE</p>
        <div className="space-x-3">
          {item.size.map((items: any, i: any) => {
            return (
              <button
                key={i}
                className="rounded-[16px] w-[70px] h-[37px] bg-gray-500 active:outline"
                onClick={() => setcartItem({ ...cartItem, size: items })}
              >
                {items}
              </button>
            );
          })}
        </div>

        {/* INC AND DEC */}
        <div className="flex justify-start items-center pt-10">
          <button
            onClick={() =>
              setcartItem({
                ...cartItem,
                qty: cartItem.qty <= 1 ? 1 : --cartItem.qty
              })
            }
          >
            {" "}
            <Minus />
          </button>
          <span> {cartItem.qty}</span>
          <button
            onClick={() => setcartItem({ ...cartItem, qty: ++cartItem.qty })}
          >
            {" "}
            <Plus />
          </button>
          {/* add to cart */}
          <Button
            onClick={() => dispatch(addtocart(cartItem))}
            className="lg:w-[300px]"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SLugProduct;
