import axios from "axios";
import { API } from "../../config";
import { ILoginData } from "../../interfaces/loginData.interface";

const postLogin = async (loginData: ILoginData) => {
  const res = await axios.post(`${API}/login`, { loginData });

  console.log(res);

  return res;
};

export default postLogin;
