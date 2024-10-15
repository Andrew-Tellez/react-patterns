class ProductEntity {
  ProductID: number;
  ProductName: string;
  ProductPrice: number;

  constructor(ProductID: number, ProductName: string, ProductPrice: number) {
    this.ProductName = ProductName;
    this.ProductPrice = ProductPrice;
    this.ProductID = ProductID;
  }
}

const products: ProductEntity[] = [
  new ProductEntity(1, "leche", 100),
  new ProductEntity(2, "pan", 200),
  new ProductEntity(3, "lechuga", 300),
  new ProductEntity(4, "jamon", 400),
];

export { ProductEntity, products };
