<template>
  <div>
    <h1>Customers</h1>
    <hr />
    <div>
      <div>
        <form @submit.prevent="addCustomer">
          <label>
            First Name:
          </label>
          <input type="text" v-model="newCustomer.firstName" />
          <br />
          <label>
            Last Name:
          </label>
          <input type="text" v-model="newCustomer.lastName" />
          <br />
          <label>
            User Email:
          </label>
          <input type="email" v-model="newCustomer.email" />
          <br />
          <br />
          <button type="submit" class="btn btn-primary">Add Customer</button>
        </form>
      </div>
    </div>

    <br />

    <table class="table">
      <tr>
        <th>Id</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Email</th>
        <th>Latest Purchases</th>
        <th>&nbsp;</th>
      </tr>
      <tr v-for="customer in customers" :key="customer.id">
        <td>{{ customer.id }}</td>
        <td>{{ customer.firstName }}</td>
        <td>{{ customer.lastName }}</td>
        <td>{{ customer.email }}</td>
        <td>
          <router-link :to="{ name: 'Customer', params: { id: customer.id } }"
            >Latest Purchases</router-link
          >
        </td>
        <td>
          <button class="btn btn-sm" @click="removeCustomer(customer)">
            Delete
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { customerService } from "../utils/CustomerService";

export default {
  data() {
    return {
      newCustomer: {
        firstName: "",
        lastName: "",
        email: "",
        customerProducts: [],
      },
      customers: customerService.getAllCustomers(),
    };
  },

  methods: {
    addCustomer() {
      this.newCustomer.id = customerService.generateId();
      customerService.addCustomer(this.newCustomer);
    },

    removeCustomer(customer) {
      customerService.removeCustomer(customer);
    },
  },
};
</script>

<style scoped>
form {
  padding: 30px;
}
label,
input,
button {
  display: block;
  text-align: left;
}
</style>
