import React from "react";

const Heading2 = ({ heading, blackHeading, className }) => {
  var resultHeading = heading?.split("^") || blackHeading?.split("^");
  return (
    <h2
      className={`${blackHeading ? "text-white dark:text-black" : "text-black dark:text-white"
        } display2 mb-2 text-center px-1 lg:px-0 ${className}`}
    >
      {resultHeading?.map((text, index) =>
        index % 2 === 0 ? (
          text
        ) : (
          <span
            className={
              "text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
            }
            key={index}
          >{` ${text} `}</span>
        )
      )}
    </h2>
  );
};

export default Heading2;
