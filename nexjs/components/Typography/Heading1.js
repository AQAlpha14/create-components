import React from "react";

const Heading1 = ({ heading, blackHeading, className }) => {
  var resultHeading = heading?.split("^") || blackHeading?.split("^");
  return (
    <h1 className={`display1 mb-2 text-center lg:text-start px-1 lg:px-0 ${className} 
    ${heading ? "text-white" : "text-black"
      } `}>
      {resultHeading?.map((text, index) => (
        index % 2 === 0 ? text : <span className={"text-transparent bg-clip-text  bg-gradient-to-r from-primary to-secondary"} key={index}>{` ${text} `}</span>
      ))}
    </h1>
  );
};

export default Heading1;
