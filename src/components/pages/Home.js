import React from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../commons/page/NavigationBar";
import { BsCoin } from "react-icons/bs";
import FooterBar from "../commons/page/FooterBar";
export class Home extends React.Component {

    render() {
        const choices = ["Check Balance", "Deposit", "Withdraw"];
        const links = ["check-balance", "deposit", "withdraw"];
        const color = ["btn-primary", "btn-success", "btn-danger"];
        const getName = sessionStorage.getItem("name");
        return <div className="d-flex flex-column bg-light min-vh-100 ">
            <NavigationBar />
            {getName ?


                <div className="text-center">
                    <h2 className="m-5 ">Welcome {getName}!</h2>
                    {choices.map((item, index) =>
                        <Link to={"/" + links[index]}>
                            <button type="button" className={"btn rounded-pill " + color[index]}>{item}</button>
                        </Link>
                    )}
                </div>


                :
                <div className="w-100 d-flex justify-content-center ">
                    <div className="w-100 p-5 m-5 align-items-center rounded-pill">
                        <div className="text-center text-primary">
                            <BsCoin size={100} />
                            <h1>
                                Atm Machine

                            </h1>
                            <h4>
                                The only thing useful banks have invented in 20 years
                            </h4>
                        </div>

                    </div>
                </div>
            }
            <FooterBar />
        </div>
    }
}