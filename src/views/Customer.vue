<template>
  <div>
    <AppCustomer :customerId="customerId" />
  </div>
</template>

<script>
import AppCustomer from "@/components/AppCustomer.vue";
export default {
  components: {
    AppCustomer,
  },
  data() {
    return {
      customerId: "",
    };
  },
  created() {
    this.customerId = Number(this.$route.params.id);
  },
};
</script>
