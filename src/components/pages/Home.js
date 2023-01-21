import React from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../commons/page/NavigationBar";
export class Home extends React.Component {
    constructor(props) {
        super(props);
      const getName=sessionStorage.getItem("name");
      this.setState({...this.state,data:{name:getName}})
      }
    render() {
        const choices = ["Check Balance", "Deposit", "Withdraw"];
        const links = ["check-balance", "deposit", "withdraw"];
        const color = ["btn-primary", "btn-success", "btn-danger"];
       
        return <>
        <NavigationBar/>
        <div className="text-center">
        <h2 className="m-5 ">Welcome {sessionStorage.getItem("name")}!</h2>
            {choices.map((item, index) =>
                <Link to={"/" + links[index]}>
                    <button type="button" className={"btn rounded-pill "+color[index]}>{item}</button>
                </Link>
            )}
        </div>
            
        </>
    }
  }