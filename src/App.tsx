import { TodoContainer } from "./components/container-presentation/todoContainer";
import { ProductList } from "./components/hoc/productList";
import { WithSearch } from "./components/hoc/withSearch";
import { products } from "./entities/Product.entity";

const ProductListWithSearch = WithSearch(ProductList, products);

export default function App() {
  return (
    <div>
      <h1>React App</h1>

      <h1>container-presentation</h1>
      <TodoContainer />

      <h1>HOC</h1>
      <ProductListWithSearch />
    </div>
  );
}
