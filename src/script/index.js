const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: homePage
    },
  ],
});

let app = new Vue({
  el: "#app",
  router,
  data: {
    data: {},
  },
  methods: {
    getContent: function () {
      this.data = data;
    },
  },
  created: function () {
    this.getContent();
  },
});
