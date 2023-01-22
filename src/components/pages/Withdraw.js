import React from "react";
import { Link, Navigate } from "react-router-dom";
import { CheckBalanceService, WithdrawService } from "../apis/actionservice";
import Swal from "sweetalert2";
import NavigationBar from "../commons/page/NavigationBar";
import { BsCashCoin } from 'react-icons/bs';
import FooterBar from "../commons/page/FooterBar";
export class Withdraw extends React.Component {
    constructor(props) {
        super(props);
        var getUserMoneyId = sessionStorage.getItem('moneyId');
        this.state = {
            data: {},
            isNavigate: false
        }
        var checkUserBalance = CheckBalanceService(getUserMoneyId).then((item) => {
            this.setState({ ...this.state, data: { balance: item.data } })
        });
    }

    isBalanceIsgreaterThanMoney() {
        if (this.state.data.balance < this.state.data.money || this.state.data.money==="" || this.state.data.money===null) { return true }
        else return false;
    }
    handleSubmit = async () => {
        const getUserId = sessionStorage.getItem('userId');
        await WithdrawService(getUserId, this.state.data.money).then(() => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Sucessfully Withdraw',
                showConfirmButton: false,
                timer: 1500
            }).then(() => this.setState({ isNavigate: true }))
        });
    }
    render() {
        return <div className="d-flex flex-column bg-light min-vh-100 text-center">
            {<NavigationBar />}
            <div className="mt-5 d-flex justify-content-center text-center">

                <div className="border border-secondary p-5">
                    <BsCashCoin size={50} />
                    <h2 className="m-4">
                        ATM Withdraw
                    </h2>
                    <div className="form-outline mb-4">
                        <label className="form-label">Your Balance :{this.state.data.balance}</label>

                    </div>
                    <div className="form-outline mb-4">
                        <input type="number" className="form-control" value={this.state.data.money} onChange={(e) => this.setState({ ...this.state, data: { ...this.state.data, money: e.target.value } })} />
                        <label className="form-label">Money</label>
                    </div>

                    <button type="submit" className="btn btn-primary rounded-pill" disabled={this.isBalanceIsgreaterThanMoney()} onClick={() => this.handleSubmit()}>Withdraw</button>
                    <Link to="/home">
                        <button type="button" className="btn btn-secondary rounded-pill">Cancel</button>

                    </Link>
                </div>
            </div>
            <FooterBar/>
            {this.state.isNavigate ? <Navigate to="/home" /> : ""}
        </div>;
    }
}