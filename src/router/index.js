
import VueRouter from 'vue-route';

var HelloWorld = require("./../components/HelloWorld");

var routes =   [
  {
    path: "/",
    name: "home",
    component: HelloWorld,
  }
]

export default new VueRouter({
	mode: 'hash',
  routes
});

