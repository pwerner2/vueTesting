const app = new Vue ({
  el: '#app',
  data: {
    keyword: "totality",
    onOff: true
  },
  methods: {
    toggleOnOff() {
      this.onOff = !this.onOff;
    }
  }
});
