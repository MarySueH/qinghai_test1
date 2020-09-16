import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
//  解决路由重复 报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  // {
  //   path:"/",
  //   name:"Login",
  //   component:()=>import("../views/login/Login.vue")
  // },
  {
    path: "/",
    name: "Nav",
    component: ()=>import("../views/Nav.vue"),
    children:[
      {
        path:"/home",
        name:"Home",
        component:()=>import("../views/Home.vue")
      },
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue")
      }
    ]
  },
  {
    path:"/index",
    name:"Index",
    component:()=>import("../views/Index.vue")
  }
  
];

const router = new VueRouter({
  routes
});

export default router;
