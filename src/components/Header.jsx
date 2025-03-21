import down_arrow from "../assets/icons/down_arrow.svg"
import searchIcon from "../assets/icons/searchIcon.svg"
import cartIcon from "../assets/icons/cartIcon.svg";
import profileIcon from "../assets/icons/profileIcon.svg"
import blackSearch from "../assets/icons/blackSearch.svg"
import menuIcon from "../assets/icons/menuIcon.svg"


export default function Header({toggleSidebar}){
    return (
      <nav className="relative flex w-full flex-wrap items-center justify-between md:justify-center  lg:pl-[100px] lg:pr-[30px] px-[16px] h-[64px] md:h-[96px] gap-[20px] lg:gap-[40px] ">
        
        {/* menu icon for smaller screens */}
        <div className=" flex gap-[18px]">
          <button className=" block md:hidden" onClick={ toggleSidebar}>
            <img src={menuIcon} alt="menu icon" />
          </button>

          <a href="" className=" text-2xl lg:text-4xl font-extrabold">
            SHOP.CO
          </a>
        </div>

        {/* nav properties which is in the sidebar for smaller screen */}

        <ul className=" hidden md:flex relative w-[auto] items-center gap-[20px]">
          <li className="flex text-md gap-[5px]">
            <a href="">Shop</a>
            <img src={down_arrow} alt="" />
          </li>
          <li className=" text-md">
            <a href="">On Sale</a>
          </li>
          <li className=" text-md">
            <a href="">New Arrivals</a>
          </li>
          <li className=" text-md">
            <a href="">Brands</a>
          </li>
        </ul>

        {/* search bar */}
        <div className="relative hidden md:flex md:flex-1 bg-gray-200 rounded-[62px] max-w-[500px] h-[48px] shadow-xl">
          <input
            type="text"
            placeholder="Search for products... "
            className="pl-[52px] w-[100%]"
            aria-label="search for products"
          />
          <img
            src={searchIcon}
            alt=" search icon"
            className=" absolute top-[50%] translate-y-[-50%] left-[16px] "
          />
        </div>

        {/* cart and profile */}
        <div className="flex gap-[12px]">
          <img
            src={blackSearch}
            alt=" search icon"
            className=" text-black block md:hidden "
          />
          <img src={cartIcon} alt=" cart icon" />
          <img src={profileIcon} alt=" cart icon" />
        </div>
      </nav>
    );
}