export default {
  path: "/error",
  redirect: "/error/403",
  meta: {
    icon: "informationLine",
    title: "异常页面",
    showLink: false,
    rank: 9
  },
  children: [
    {
      path: "/error/403",
      name: "403",
      component: () => import("@/views/error/403.vue"),
      showLink: false,
      meta: {
        title: "403"
      }
    },
    {
      path: "/error/404",
      name: "404",
      component: () => import("@/views/error/404.vue"),
      meta: {
        title: "404"
      }
    },
    {
      path: "/error/500",
      name: "500",
      component: () => import("@/views/error/500.vue"),
      meta: {
        title: "500"
      }
    }
  ]
} as RouteConfigsTable;
