import api from "./api";

export const getCategories = async () => {
  const res = await api.get("/category/getAllCategories_UserPage");
  return res.data;
};
