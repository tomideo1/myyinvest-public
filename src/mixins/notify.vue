<script>
export default {
  data() {},
  methods: {
    handleNotify(payload) {
      this.$Bus.$emit("notify", {
        show: true,
        mainMessage: payload.message
          .split("_")
          .join(" ")
          .replace(/\\\//g, "/"),
        tinyMessage: payload.message
          .split("_")
          .join(" ")
          .replace(/\\\//g, "/"),
        extras: "",
        status: payload.status
      });
    }
  }
};
</script>
