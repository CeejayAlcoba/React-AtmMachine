import React from "react";
import { FaMoneyBillAlt } from 'react-icons/fa';
import { BsCoin } from 'react-icons/bs';
import { Link, Navigate } from "react-router-dom";
import { AddUser } from "../apis/userApi";
import Swal from "sweetalert2";
import FooterBar from "../commons/page/FooterBar";

export class Signup extends React.Component {
    state = {
        data: {
            name: "",
            username: "",
            password: ""
        },
        errors: {
            name: "",
            username: "",
            password: ""
        },
        isNavigate: false
    }
    handleData(field, value) {
        this.setState({ ...this.state, data: { ...this.state.data, [field]: value } });
        console.log(this.state.data);
    }
    handleSubmit = async () => {
        await AddUser(this.state.data).then(() => {

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Sucessfully Created',
                showConfirmButton: false,
                timer: 1500
            }).then(() => this.setState({ isNavigate: true }))
        });
    }

    isNull = () => {
        if (this.state.data.name === "" || this.state.data.username === "" || this.state.data.password === "") {
            return true;
        }
        else return false;
    }
    render() {
        return <div className="d-flex flex-column min-vh-100 text-center bg-primary">
            <div className="d-flex justify-content-center p-1">
                <div className="w-50 d-flex d-flex justify-content-center align-items-center text-light ">
                    <div className="text-center">
                        <BsCoin size={100} />
                        <h1 className="">

                            Atm Machine

                        </h1>
                        <h4>
                            The only thing useful banks have invented in 20 years
                        </h4>
                    </div>

                </div>
                <div className="w-25 text-center border border-secondary p-4 m-5 bg-light">
                    <FaMoneyBillAlt size={40} />
                    <h2 className="m-4">
                        Sign Up
                    </h2>

                    <div className="form-outline mb-4">
                        <input type="text" className="form-control" value={this.state.data.name} onChange={(e) => this.handleData("name", e.target.value)} />
                        <label className="form-label">Name</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="text" className="form-control" value={this.state.data.username} onChange={(e) => this.handleData("username", e.target.value)} />
                        <label className="form-label">Username</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" className="form-control" value={this.state.data.password} onChange={(e) => this.handleData("password", e.target.value)} />
                        <label className="form-label">Password</label>
                    </div>


                    <button type="submit" className="btn btn-outline-primary rounded-pill m-2" disabled={this.isNull()} onClick={() => this.handleSubmit()}>Sign in</button>
                    <p>Already have an account </p><Link to="/signin"> Sign in</Link>


                </div>
            </div>
            <FooterBar />
            {this.state.isNavigate ? <Navigate to="/signin" /> : ""}
        </div>
    }
}