import axios from "axios";
import {entryPoint} from "../apis/cofiguration";
const endPoint="/user";

function AddUser(data) {
   return axios.post(entryPoint+endPoint+"/add",data)
  }
  function LogIn(data) {
    return axios.post(entryPoint+endPoint+"/login",data)
   }
 
export{
AddUser,
LogIn
};
