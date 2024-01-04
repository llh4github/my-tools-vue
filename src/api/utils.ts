const { VITE_BASE_URL } = import.meta.env;
export const baseUrlApi = (url: string) =>
  process.env.NODE_ENV === "development"
    ? `/api/${url}`
    : `${VITE_BASE_URL}${url}`;
