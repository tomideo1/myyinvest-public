<script>
export default {
  data() {},
  methods: {
    handleValidation(payload) {
      let keys = Object.keys(payload);
      let validationSuccess = true;

      //check and ensures all fields are required and filled
      for (let i = 0; i < keys.length; i++) {
        if (payload[keys[i]] === "" || typeof payload[keys[i]] === "undefined") {
          this.handleNotify({
            message: `${keys[i]} field is required`,
            status: "Error"
          });
          validationSuccess = false;
          break;
        }
      }

      //if password and confirm password exists ensure they are identical
      if (payload.confirm_password && payload.password) {
        if (payload.password !== payload.confirm_password) {
          this.handleNotify({
            message: `Password fields do not match `,
            status: "Error"
          });
          validationSuccess = false;
        }
      }

      return validationSuccess;
    }
  }
};
</script>
