const app = new Vue({
  el: '#app',
  data: {
    keyword: "blue",
    onOff: true
  },
  methods: {
    toggleOnOff() {
      this.onOff = !this.onOff;
    }
  }
});
