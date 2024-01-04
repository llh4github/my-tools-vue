export default {
  path: "/tools",
  redirect: "/error/403",
  meta: {
    icon: "informationLine",
    title: "常用工具",
    rank: 9
  },
  children: [
    {
      path: "/tools/ToGo",
      name: "ConvertToGo",
      component: () => import("@/views/convert/ToGo.vue"),
      meta: {
        title: "转Go结构体"
      }
    }
  ]
} as RouteConfigsTable;
