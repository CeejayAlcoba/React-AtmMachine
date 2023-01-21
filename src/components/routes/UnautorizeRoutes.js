
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SwalDialog } from "../commons/sweetAlert2/SwalDialog";
import { CheckBalance } from "../pages/CheckBalance";
import {Deposit} from "../pages/Deposit";
import {Home} from "../pages/Home";
import { Signin } from "../pages/Signin";
import { Signup } from "../pages/Signup";
import {Withdraw} from "../pages/Withdraw";
import NavigationBar from "../commons/page/NavigationBar";

export default function UnAuthorizeRoutes() {
  return (
    <>
    <BrowserRouter>
      <Routes>
       <Route path="*" element={<Signin />}/>
       <Route path="signup" element={<Signup />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}