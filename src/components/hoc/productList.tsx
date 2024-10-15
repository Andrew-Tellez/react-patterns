import { ProductEntity } from "../../entities/Product.entity";
import { Product } from "./product";
import { filter } from "./utils";

interface ProductListProps {
  dataset: ProductEntity[];
  query: string;
}

function ProductList(props: ProductListProps) {
  const { dataset, query } = props;
  const items = filter(dataset, (product) =>
    product.ProductName.includes(query),
  );

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.ProductID}>
            <Product {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export { ProductList };
