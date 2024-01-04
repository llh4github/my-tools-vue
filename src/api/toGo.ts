import { http } from "@/utils/http";
import { baseUrlApi } from "./utils";

type Result = {
  code: string;
  msg: string;
  data: Array<string>;
};

export const convertGoApi = (data: any) => {
  return http.request<Result>("post", baseUrlApi("/convert/go"), { data });
};
