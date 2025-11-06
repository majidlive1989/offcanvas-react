import React from "react";
import { useOffcanvas } from "../store/store";

const Main = () => {
  const { Toggle } = useOffcanvas();
  return (
    <div className="flex flex-col justify-center items-center p-8 gap-7">
      <div>
        <img className="w-[212px] " src="./src/assets/img/react.svg" alt="" />
      </div>
      <div>
        <button
          onClick={Toggle}
          className="rounded-2xl border-2 border-[#222] text-[#222] p-2 tracking-[8px] hover:bg-[#222] hover:text-white"
        >
          Toggle Menu
        </button>
      </div>
    </div>
  );
};

export default Main;
