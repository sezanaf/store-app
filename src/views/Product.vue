<template>
  <div>
    <AppProduct :productId="productId" />
  </div>
</template>

<script>
import AppProduct from "@/components/AppProduct.vue";
export default {
  components: {
    AppProduct,
  },
  data() {
    return {
      productId: "",
    };
  },
  created() {
    this.productId = Number(this.$route.params.id);
  },
};
</script>
