const app = new Vue({
  el: '#app',
  data: {
    keyword: "totality",
    onOff: true,
    styleObj: {
      backgroundColor: '#333'
    }
  },
  methods: {
    toggleOnOff() {
      this.onOff = !this.onOff;
    }
  }
});
