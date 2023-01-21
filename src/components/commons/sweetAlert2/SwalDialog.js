import React from "react";
import { Link, Navigate } from "react-router-dom";
import Swal from "sweetalert2";

export const SwalDialog=(props)=>{
 
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: props.title,
      showConfirmButton: false,
      timer: 1500
    })
  
}