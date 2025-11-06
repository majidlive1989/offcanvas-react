import { useOffcanvas } from "../store/store";
import clsx from "clsx";

const Offcanvas = () => {
  const { open, setOpen } = useOffcanvas();
  return (
    <div
      className={clsx(
        "flex flex-col w-[30%] h-full p-3 gap-6 bg-white fixed top-0 transition-all duration-1000 z-10 ",
        {
          "-left-full ": !open,
          "left-0": open,
        }
      )}
    >
      <div className="flex flex-row justify-between p-3">
        <div>
          <img className=" " src="./src/assets/img/react.svg" alt="" />
        </div>
        <div>
          <svg
            onClick={() => setOpen(false)}
            fill="#bb2525"
            width="40px"
            height="40px"
            viewBox="-3.5 0 19 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" />
          </svg>
        </div>
      </div>
      <div className="text-2xl ">
        <ul className=" flex flex-col gap-9 p-7 text-[#617d98]">
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Offcanvas;
