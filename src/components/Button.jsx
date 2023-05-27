import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link to={props.link}>
       <div className={'inline-block text-sm font-medium leading-5 text-center'}>
            <div className=" text-white transition-colors duration-200 transform ">
              <div className="rounded-full px-10 py-2 bg-blue-700  hover:bg-blue-300 hover:text-blue-600 focus:outline-none focus:bg-blue-60">
                {props.name}
              </div>
            </div>
      </div>
    </Link> 
  );
};

export default Button;
