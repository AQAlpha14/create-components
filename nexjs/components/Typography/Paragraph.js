import React from "react";

const Paragraph = ({ content, blackContent, className }) => {
  var resultContent = content?.split("^") || blackContent?.split("^");
  return (
    <p
      className={`${blackContent ? "text-white dark:text-black" : "text-black dark:text-white"
        } displayPara mb-4 text-center lg:text-start px-1 lg:px-0 ${className}`}
    >
      {resultContent?.map((text, index) =>
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
    </p>
  );
};

export default Paragraph;
