import api from "./api";

export const getProducts = async () => {
  const res = await api.get("/product/getAllProducts_User_Page");
  return res.data;
};
