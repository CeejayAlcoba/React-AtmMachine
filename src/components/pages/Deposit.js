import React from "react";
import { Link, useNavigate, redirect, Navigate } from "react-router-dom";
import {BsCoin} from 'react-icons/bs';
import { SwalDialog } from "../commons/sweetAlert2/SwalDialog";
import Swal from "sweetalert2";
import { DepositService } from "../apis/actionservice";
import NavigationBar from "../commons/page/NavigationBar";
export class Deposit extends React.Component {
    state = {
        data:{},
        isNavigate:false
    }
     navigate=()=>{
        return useNavigate();
     }
        
    handleSubmit =async()=>{
        const getUserId=sessionStorage.getItem('userId');
        await DepositService(getUserId,this.state.data.money).then(()=>{
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Sucessfully Deposited',
                showConfirmButton: false,
                timer: 1500
              }).then(()=>this.setState({isNavigate:true}))
        })
        
      }
      isNull = () => {
        if (this.state.data.money == null || this.state.data.money == 0 ) {
            return true;
        }
        else return false;
    }
    render() {
        return <>
        {<NavigationBar/>}
            <div className="mt-5 d-flex justify-content-center text-center">
             
                 <div className="border border-secondary p-5">
                    <BsCoin size={50}/>
                 <h2 className="m-4">
                        ATM Deposit
                    </h2>
                   
                    <div className="form-outline mb-4">
                        <input type="number" className="form-control"value={this.state.data.money} onChange={(e)=>this.setState({...this.state,data:{money:e.target.value}})} />
                        <label className="form-label" for="form2Example1">Cash</label>
                    </div>
                   
                    <button type="submit" className="btn btn-primary rounded-pill"onClick={()=>this.handleSubmit()} disabled={this.isNull()}>Deposit</button>
                    <Link to="/home">
                    <button type="button" className="btn btn-secondary rounded-pill">Cancel</button>

                    </Link>
                 </div>
            </div>
            {this.state.isNavigate?<Navigate to="/home"/>:""}
        </>;
    }
}