import axios from "axios";
import {entryPoint} from "../apis/cofiguration";
const endPoint="/action";

const DepositService=(userId,money)=> {
   return axios.post(entryPoint+endPoint+"/deposit/"+userId+"/"+money)
  }
  const WithdrawService=(userId,money) =>{
    return axios.post(entryPoint+endPoint+"/withdraw/"+userId+"/"+money)
   }
   const CheckBalanceService=(userId)=> {
    return axios.get(entryPoint+endPoint+"/check-balance/"+userId)
   }
 
export{
    DepositService,
    WithdrawService,
    CheckBalanceService
};
