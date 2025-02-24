import React from "react";

const Heading5 = ({ heading, blackHeading, className }) => {
  var resultHeading = heading?.split("^") || blackHeading?.split("^");
  return (
    <h5
      className={`${
        blackHeading ? "text-white dark:text-black" : "text-black dark:text-white"
      } display5 mb-2 text-center px-1 lg:px-0 ${className}`}
    >
      {resultHeading?.map((text, index) =>
        index % 2 === 0 ? (
          text
        ) : (
          <span
            className={
              `${className} text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary`
            }
            key={index}
          >{` ${text} `}</span>
        )
      )}
    </h5>
  );
};

export default Heading5;
