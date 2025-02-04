import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
const Cartpage = () => {
  const cartItem = useSelector((state) => state.cart);
  return (
    <div>
      {cartItem.length >= 1 &&
        cartItem.map((item: any, i: any) => (
          <div
            key={i}
            className="flex w-[650px] p-4 rounded-[16px] border justify-between"
          >
            <div className="flex
            ">
              <Image src={item.image[0]} width={100} height={100} alt="image" />
              <div className="flex flex-col ml-3 justify-center">
                <span>Size:{item.size}</span>
                <span>Color:{item.color}</span>
                <span>${item.price}</span>
              </div>
            </div>
            <div className="relative">
              {/* btn */}
              <span>
                <AiFillDelete className="text-red-600 absolute right-2 top-0"/>
              </span>
              <div className="flex justify-start items-center pt-10">
                <button>
                  {" "}
                  <Minus />
                </button>
                <span> {cartItem.qty}</span>
                <button>
                  {" "}
                  <Plus />
                </button>
                {/* add to cart */}
                <Button className="lg:w-[300px]">Add to cart</Button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cartpage;
