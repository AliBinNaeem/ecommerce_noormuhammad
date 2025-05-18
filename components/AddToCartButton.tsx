import { Product } from "@/sanity.types";
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import QantityButtons from "./QantityButtons";
import PriceFormatter from "./PriceFormatter";
interface Props {
  product: Product;
  className?: string;
}
const AddToCartButton = ({ product, className }: Props) => {
  // check if stock is available
  const isOutOfStock = product?.stock === 0;
  const itemCount = 4;
  return (
    <div>
      {itemCount > 1 ? (
        <div className="w-full text-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Quantity</span>
            <QantityButtons product={product} />
          </div>
          <div className="flex items-center justify-between border border-t pt-1`">
            <apan className="text-xs font-semibold">Subtotal</apan>
          <PriceFormatter amount={itemCount * product?.price} />
            </div>
        </div>
      ) : (
        <Button
          disabled={isOutOfStock}
          className={cn(
            `w-full bg-transparent text-darkColor shadow-none border border-darkColor/30 font-semibold tracking-wide hover:text-white hoverEffect stock:${product?.stock}`,
            className
          )}
        >
          Add to Cart
        </Button>
      )}
    </div>
  );
};

export default AddToCartButton;
