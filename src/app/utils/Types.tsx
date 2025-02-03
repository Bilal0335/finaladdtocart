import { StaticImageData } from "next/image";

export interface IProduct {
  id: number; // Product ka unique identifier
  title: string; // Product ka title ya name
  image?: string[] | StaticImageData | string; // Product ki images
  slug: string; // URL-friendly unique identifier for the product
  price: number; // Product ki price
  category: string; // Product ka category name
  description: string; // Product ka detailed description
  size: string[]; // Product ke available sizes
  color: string[]; // Product ke available colors
  qty: number; // Available quantity of the product
  discount?: number; // Discount on product (optional)
}

//cart data type
export interface Cart {
  id: number;
  title: string;
  image?: string[] | StaticImageData | string;
  slug: string;
  price: number;
  size: string[];
  color: string[];
  qty: number;
  discount?: number;
  uuid: string | number | undefined;
}
