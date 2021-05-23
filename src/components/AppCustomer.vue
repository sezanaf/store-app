<template>
  <div>
    <h3>Customer: {{ customer.firstName }} {{ customer.lastName }}</h3>
    <p>Email: {{ customer.email }}</p>
    <p><b>Customer Products</b></p>

    <div v-for="userProduct in customer.products" :key="userProduct.id">
      <p>{{ userProduct.title }}</p>
    </div>
  </div>
</template>

<script>
import { customerService } from "../utils/CustomerService";

export default {
  props: {
    customerId: {
      type: Number,
    },
  },

  computed: {
    customer() {
      return customerService.getCustomer(this.customerId);
    },
  },
};
</script>
