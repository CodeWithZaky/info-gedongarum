import { Fragment } from "react";

import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

const Nav = () => {
  return (
    <Fragment>
      <Topbar />
      <Sidebar />
    </Fragment>
  );
};

export default Nav;
