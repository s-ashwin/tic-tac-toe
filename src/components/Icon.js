import React from "react";
import { FaTimes, FaPen, FaRegCircle } from 'react-icons/fa';


const Icon = ({name})=>{


    switch (name) {
        case "Circle":
            return(
                <FaRegCircle className="icon text-primary" ></FaRegCircle>
            )
        case "Cross":
            return(
                <FaTimes className="icon text-danger"  ></FaTimes>
            )  
    
        default:
            return(
                <FaPen className="icon"  ></FaPen>
            )  
    }
}

export default Icon;