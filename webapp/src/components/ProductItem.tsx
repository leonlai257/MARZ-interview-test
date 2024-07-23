import { Product } from "./interfaces";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => (
  <div
    className="bg-neutral-300 flex items-center justify-between mt-1 p-3 rounded w-full"
    data-testid={`draggable-container-${product.ProductID}`}
  >
    <span
      data-testid={`draggable-productID-${product.ProductID}`}
      className="basis-1/4"
    >
      {product.ProductID}
    </span>
    <span
      data-testid={`draggable-ProductName-${product.ProductID}`}
      className="basis-1/4"
    >
      {product.ProductName}
    </span>

    <span
      data-testid={`draggable-ProductPhotoURL-${product.ProductID}`}
      className="basis-1/4"
    >
      <img
        className="basis-1/4"
        src={product.ProductPhotoURL}
        alt={product.ProductName}
        width={100}
        height={100}
      />
    </span>
    <span
      data-testid={`draggable-ProductStatus-${product.ProductID}`}
      className="basis-1/4"
    >
      {product.ProductStatus}
    </span>
  </div>
);

export default ProductItem;
