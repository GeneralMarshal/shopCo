import cancel from "../assets/icons/cancel.svg"

export default function PromoBanner(){
    return (
      <header className=" flex justify-center sm:justify-between px-[50px] sm:px-[100px] items-center h-[38px] bg-black text-white text-sm font-thin">
        <span className=" hidden sm:block"></span>
        <span>
          Sign up and get 20% off of your first order.{" "}
          <a href="" className=" font-medium underline">
            Sign up Now
          </a>
        </span>
        <img src={cancel} alt="" className=" hidden sm:block" />
      </header>
    );
}
