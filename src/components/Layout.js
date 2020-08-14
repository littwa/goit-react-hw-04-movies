import React from "react";
import Navigation from "./Navigation";
let Layout = ({ children }) => (
 <div>
  <Navigation />
  <hr />
  {children}
 </div>
);

export default Layout;
