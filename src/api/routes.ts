import { http } from "@/utils/http";

type Result = {
  success: boolean;
  data: Array<any>;
};
const permissionRouter = {
  path: "/permission",
  meta: {
    title: "权限管理",
    icon: "lollipop",
    showLink: false,
    rank: 10
  },
  children: [
    {
      path: "/permission/page/index",
      name: "PermissionPage",
      meta: {
        title: "页面权限",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/permission/button/index",
      name: "PermissionButton",
      meta: {
        title: "按钮权限",
        roles: ["admin", "common"],
        auths: ["btn_add", "btn_edit", "btn_delete"]
      }
    }
  ]
};
export const getAsyncRoutes = () => {
  return new Promise((resolve, _reject) => {
    resolve({
      success: true,
      data: [permissionRouter]
    });
  });
  // return http.request<Result>("get", "/getAsyncRoutes");
};
