interface ProductProps {
  ProductName: string;
  ProductPrice: number;
}

function Product(props: ProductProps) {
  const { ProductName, ProductPrice } = props;
  return (
    <h3>
      {ProductName} - {ProductPrice}
    </h3>
  );
}

export { Product };
export type { ProductProps };
