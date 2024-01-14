import React from "react";

const Button = (props) => {

    return (
      <button
        className="rounded-md font-serif font-medium text-xl py-4 px-4 bg-cyan-300"
        onClick={props.onclickBtn}
      >
        {props.name}
      </button>
    );
};

export default Button;
