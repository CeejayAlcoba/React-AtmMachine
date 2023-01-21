import React from "react";
import { Link, useNavigate, redirect, Navigate } from "react-router-dom";
import { SwalDialog } from "../commons/sweetAlert2/SwalDialog";
import Swal from "sweetalert2";
import { DepositService } from "../apis/actionservice";
export class Logout extends React.Component {
    constructor(props) {
        super(props);
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('moneyId'); 
      }
    render() {
        return <>
           
           <Navigate to="/signin"/>
        </>;
    }
}