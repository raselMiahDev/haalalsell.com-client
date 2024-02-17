import axios from "axios";
import unauthorized from "../utility/unauthorized";
import { setToken, getToken, setUserDetails } from "../helper/SessionHelper";
// const BASEURL = "https://e-shop-server-seven.vercel.app";
const BASEURL = "http://localhost:5000/api/v1";
const Headers = { headers: { token: getToken() } };

export const CreateCategoryRequiest = async (categoryName, categoryImg) => {
  try {
    const reqData = { categoryName: categoryName, categoryImg: categoryImg };
    const URL = BASEURL + "/CreateCategory";
    const { data } = await axios.post(URL, reqData, Headers);
    return data;
  } catch (error) {
    console.error("Error creating category:", error);
    throw error; // Rethrow the error to be caught by the caller
  }
};

export const CreateBrandRequiest = async (brandName, brandImg) => {
  try {
    const reqData = { brandName: brandName, brandImg: brandImg };
    const URL = BASEURL + "/CreateBrand";
    const { data } = await axios.post(URL, reqData, Headers);
    return data;
  } catch (error) {
    console.error("Error creating category:", error);
    throw error; // Rethrow the error to be caught by the caller
  }
};
