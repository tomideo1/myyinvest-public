export default {
  methods: {
    formatNum(num) {
      if (num < 10) {
        return "0" + num;
      } else return num;
    }
  }
};
