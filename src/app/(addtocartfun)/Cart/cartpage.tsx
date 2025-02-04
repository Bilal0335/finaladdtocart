import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { Minus, Plus } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { addition, delItem, subraction } from "../Redux/features/cartSlice";
const Cartpage = () => {
  const cartItem = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div>
      {cartItem.length >= 1 &&
        cartItem.map((item: any, i: any) => (
          <div
            key={i}
            className="flex w-[650px] p-4 rounded-[16px] border justify-between"
          >
            <div
              className="flex
            "
            >
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
                <AiFillDelete
                  className="text-red-600 absolute right-2 top-0 cursor-pointer"
                  onClick={() => dispatch(delItem(item.uuid))}
                />
              </span>
              <div className="flex justify-start items-center pt-10">
                <button
                  onClick={() => dispatch(subraction(item))}
                  className="w-10"
                >
                  <Minus />
                </button>
                <span className="w-4">{item.qty}</span>
                <button
                  onClick={() => dispatch(addition(item))}
                  className="w-10"
                >
                  <Plus />
                </button>
                {/* add to cart
                <Button className="lg:w-[300px]">Add to cart</Button> */}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cartpage;
