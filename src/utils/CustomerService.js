const customers = [
  {
    id: 1,
    firstName: "Jelena",
    lastName: "Jelenic",
    email: "jelena@example.com",
    products: [
      { id: 10, title: "Product 1", quantity: 3 },
      { id: 20, title: "Product 2", quantity: 7 },
      { id: 30, title: "Product 3", quantity: 13 },
    ],
  },
  {
    id: 2,
    firstName: "Ivana",
    lastName: "Ivanic",
    email: "ivana@example.com",
    products: [
      { id: 40, title: "Product 4", quantity: 24 },
      { id: 50, title: "Product 5", quantity: 28 },
      { id: 60, title: "Product 6", quantity: 6 },
    ],
  },
  {
    id: 3,
    firstName: "Jovana",
    lastName: "Jovanic",
    email: "jovana@example.com",
    products: [
      { id: 70, title: "Product 7", quantity: 24 },
      { id: 80, title: "Product 8", quantity: 28 },
      { id: 90, title: "Product 9", quantity: 6 },
    ],
  },
  {
    id: 4,
    firstName: "Tijana",
    lastName: "Tijanic",
    email: "tijana@example.com",
    products: [
      { id: 100, title: "Product 10", quantity: 33 },
      { id: 110, title: "Product 11", quantity: 18 },
      { id: 120, title: "Product 12", quantity: 6 },
    ],
  },
];

export default class CustomerService {
  getAllCustomers() {
    return customers;
  }

  getCustomer(id) {
    return customers.find((data) => data.id === id);
  }

  addCustomer(customer) {
    customers.push(customer);
  }

  removeCustomer(customer) {
    customers.splice(customers.indexOf(customer), 1);
  }

  generateId() {
    return customers[customers.length - 1].id + 1;
  }

  addProductToCustomer(product, customerId) {
    const customer = customers.find((customer) => customer.id === customerId);
    customer.products.push(product);
  }
}

export const customerService = new CustomerService();
