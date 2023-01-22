import React from "react";
import {Navigate } from "react-router-dom";
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