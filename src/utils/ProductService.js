const products = [
  {
    id: 1,
    title: "Product 1",
    quantity: 11,
  },
  {
    id: 2,
    title: "Product 2",
    quantity: 20,
  },
  {
    id: 3,
    title: "Product 3",
    quantity: 40,
  },
  {
    id: 4,
    title: "Product 4",
    quantity: 25,
  },
  {
    id: 5,
    title: "Product 5",
    quantity: 65,
  },
  {
    id: 6,
    title: "Product 6",
    quantity: 5,
  },
  {
    id: 7,
    title: "Product 7",
    quantity: 0,
  },
];

export default class ProductService {
  getAllProducts() {
    return products;
  }

  getProduct(id) {
    return products.find((data) => data.id === id);
  }
}

export const productService = new ProductService();
