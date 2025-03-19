import cancel from "../assets/icons/cancel.svg";
import down_arrow from "../assets/icons/down_arrow.svg";

export default function Sidebar( {toggleSidebar, isOpen}) {
  return (
    <aside className={`fixed md:hidden flex h-[100vh] w-[100%] z-10 top-0 ${ isOpen ? "left-0" : "left-[-100%]"} transition-all duration-300`}>
      <div className="h-[100%] w-[75%] px-[20px] py-[20px] bg-[#222222]  text-[#ffffff] ">
        <div className="flex justify-center mb-[50px] ">
          <a href="" className=" text-xl font-extrabold">
            SHOP.CO
          </a>
        </div>

        {/* navigation list  */}
        <ul className="pl-[10px] cursor-pointer ">
          <li className=" flex h-[50px]">
            <a href="">Shop</a>
            {/* <img src="" alt="" /> */}
          </li>
          <li className="h-[50px]">
            <a href="">On Sale</a>
          </li>
          <li className=" h-[50px]">
            <a href="">New Arrivals</a>
          </li>
          <li className=" h-[50px]">
            <a href="">Brands</a>
          </li>
        </ul>
      </div>
      {/* overlay beside side-bar */}
      <div
        className="flex  justify-center right-0 top-0 w-[25%] py-[20px] bg-[#222222] opacity-80 cursor-pointer  "
        onClick={toggleSidebar}
        aria-label=" close side-bar"
      >
        <img src={cancel} alt="" className=" w-[24px] h-[24px]" />
      </div>
    </aside>
  );
}
