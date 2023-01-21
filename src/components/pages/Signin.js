import React, { useState } from "react";
import { FaMoneyBillAlt } from 'react-icons/fa';
import { BsCoin } from 'react-icons/bs';
import { Link, Navigate } from "react-router-dom";
import { AddUser, LogIn } from "../apis/userApi";


export function Signin() {
    const [data, setData] = useState([]);
    const [isNavigate, setIsNavigate] = useState(false);
    const handleData = (field, value) => {
        setData({ ...data, [field]: value });
        console.log(data);
    }
    const handleSubmit = async () => {
        try {
            var login = LogIn(data).then((item) => {
                sessionStorage.setItem('username', item.data.username);
                sessionStorage.setItem('name', item.data.name);
                sessionStorage.setItem('userId', item.data.userId);
                sessionStorage.setItem('moneyId', item.data.moneyId);

            }).then(() => setIsNavigate(true))


        }
        catch (ex) {
        }
    }
    const isNull = () => {
        if (data.username == "" || data.password == "") {
            return true;
        }
        else return false;
    }
    return (
        <>
         <div className="d-flex justify-content-center bg-primary">
         <div className="w-50 d-flex d-flex justify-content-center align-items-center text-light ">
                <div className="text-center">
                    <BsCoin size={100} />
                    <h1 className="">

                        Atm Machine
                        <h4>
                            The only thing useful banks have invented in 20 years
                        </h4>
                    </h1>

                </div>

            </div>
            <div className="w-25 text-center border border-secondary p-4 m-5 bg-light">
                <div className="p-5">
                    <FaMoneyBillAlt size={40} />
                    <h2 className="m-4">
                        Sign in
                    </h2>

                    <div className="form-outline mb-4">
                        <input type="text" className="form-control" value={data.username} onChange={(e) => handleData("username", e.target.value)} />
                        <label className="form-label" for="form2Example1">Username</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" className="form-control" value={data.password} onChange={(e) => handleData("password", e.target.value)} />
                        <label className="form-label" for="form2Example2">Password</label>
                    </div>
                    <button type="submit" className="btn btn-outline-primary rounded-pill m-2" disabled={isNull()} onClick={() => handleSubmit()}>Sign in</button>
                    <p>Already have an account</p><Link to="/signup">Sign up</Link>
                </div>
            </div>
         </div>
           
            {isNavigate ? <Navigate to="/home" /> : ""}
        </>
    )
}