'use client'
import {FC, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const BootstrapClient:FC=()=>{

    useEffect(()=>{
        if(typeof window !== undefined){
            require('bootstrap/dist/js/bootstrap');
        }
    },[])

    return null;
}

export default BootstrapClient