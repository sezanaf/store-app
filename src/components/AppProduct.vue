<template>
  <div>
    <div>
      <!-- <p>{{ product.id }}</p> -->
      <p>Product: {{ product.title }}</p>
      <p>Quantity: {{ product.quantity }}</p>
    </div>
    <div v-if="product.quantity">
      <label for="customer">Customer</label>
      <select v-model="selectedCustomerId" id="customer">
        <option :value="null" disabled selected
          >Please select a customer</option
        >
        <option
          :value="customer.id"
          v-for="customer in customers"
          :key="customer.id"
        >
          {{ customer.firstName }} {{ customer.lastName }}
        </option>
      </select>

      <button @click="confirmProduct(selectedCustomerId)">Confirm</button>
      <button to="/products">Cancel</button>
    </div>

    <div v-else>
      <h3>We do not have this product in stock</h3>
      <router-link to="/products">Go Back to Products</router-link>
    </div>
  </div>
</template>

<script>
import { customerService } from "../utils/CustomerService";
import { productService } from "../utils/ProductService";

export default {
  props: {
    productId: {
      type: Number,
    },
  },
  data() {
    return {
      customers: customerService.getAllCustomers(),
      selectedCustomerId: null,
      productsInstock: false,
    };
  },
  computed: {
    product() {
      return productService.getProduct(this.productId);
    },
  },
  methods: {
    confirmProduct(customerId) {
      if (!customerId) {
        alert("Please select a Customer");
        return;
      }
      productService.decrementQuantity(this.product.id);
      customerService.addProductToCustomer(this.product, customerId);
      this.$router.push({ name: "Customer", params: { id: customerId } });
    },
  },
};
</script>
