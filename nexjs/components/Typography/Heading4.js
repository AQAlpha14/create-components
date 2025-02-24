import React from "react";

const Heading4 = ({ heading, blackHeading, className, multiThemeColor }) => {
  var resultHeading = heading?.split("^") || blackHeading?.split("^");
  return (
    <h4
      className={`${
        blackHeading
          ? "text-white dark:text-black"
          : "text-black dark:text-white"
      } display4 mb-2 text-center px-1 lg:px-0 ${className}`}
    >
      {resultHeading?.map((text, index) =>
        index % 2 === 0 ? (
          text
        ) : multiThemeColor ? (
          <span
            className={`text-transparent bg-clip-text bg-gradient-to-r ${multiThemeColor}`}
            key={index}
          >{` ${text} `}</span>
        ) : (
          <span
            className={
              "text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
            }
            key={index}
          >{` ${text} `}</span>
        )
      )}
    </h4>
  );
};

export default Heading4;
