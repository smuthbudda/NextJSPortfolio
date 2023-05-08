import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Toolbars from "./BottomToolbars";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <div style={{paddingTop:"100px"}}>
        {children}
      </div>
      <Toolbars/>
    </>
  );
};
export default Layout;
