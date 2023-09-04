import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`3xl:w-[75%]  2xl:w-full w-[55%] h-full inline-block z-0 bg-light dark:bg-dark p-32 xl:p-24 lg:p-16 md:12 sm:p-8  ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
