import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckBalanceService } from "../apis/actionservice";
import FooterBar from "../commons/page/FooterBar";
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import NavigationBar from "../commons/page/NavigationBar";
export function CheckBalance() {
    const [balance, setBalance]=useState(0);
    useEffect(() => {
        const userMoneyId=sessionStorage.getItem("moneyId");
        const value =CheckBalanceService(userMoneyId).then((val)=>
        setBalance(val.data)
        );
        
        },[]);
    return <div className="d-flex flex-column bg-light min-vh-100 ">
     <NavigationBar/>
        <div className="mt-5 d-flex justify-content-center text-center bg-light ">
        <div className="border border-secondary p-5 m-5 h-75">
            <MdOutlineAccountBalanceWallet size={50}/>
        <h1>
                Your Balance: {balance}
            </h1>
            <div className="text-center">

                <Link to="/home">
                    <button type="button" className="btn btn-primary rounded-pill">Home</button>
                </Link>
                <Link to="/deposit">
                    <button type="button" className="btn btn-success rounded-pill">Deposit</button>
                </Link>
                <Link to="/withdraw">
                    <button type="button" className="btn btn-danger rounded-pill">Withdraw</button>
                </Link>
            </div>
        </div>
        
        </div>
        <FooterBar />
    </div>;
}
