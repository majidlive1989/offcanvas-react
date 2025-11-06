import React from "react";
import { useOffcanvas } from "../store/store";

const Header = () => {
  const { open, setOpen } = useOffcanvas();
  return (
    <div className="flex flex-row justify-between p-9 w-full ">
      <div>
        <img src="./src/assets/img/react.svg" alt="" />
      </div>
      <div>
        <svg
          onClick={() => setOpen(open === true ? false : true)}
          fill="#49a6e9"
          width="50px"
          height="50px"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>icn/menu</title>
          <path
            d="M2 3h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"
            id="a"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
