
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CheckBalance } from "../pages/CheckBalance";
import { Deposit } from "../pages/Deposit";
import { Home } from "../pages/Home";
import { Signin } from "../pages/Signin";
import { Signup } from "../pages/Signup";
import { Withdraw } from "../pages/Withdraw";
import { Logout } from "../pages/Logout";

export default function RoutesPage() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="check-balance" element={<CheckBalance />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}