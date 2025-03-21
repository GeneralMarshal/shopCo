import banner from "../assets/images/banner.png"

import bannerIcon from "../assets/icons/banner-star.svg"
import calvin from "../assets/logos/calvin.svg"
import versace from "../assets/logos/versace.svg";
import zara from "../assets/logos/zara.svg";
import gucci from "../assets/logos/gucci.svg";
import prada from "../assets/logos/prada.svg";




export default function Banner(){
    return (
      <section>
        <div className=" flex flex-col md:flex-row max-h-[auto] lg:max-h-[670px] h-auto bg-[#c2c2c2]">
          <div className=" flex-1 flex items-center text-center md:items-start md:text-left flex-col px-[20px] py-[20px] md:pl-[70px] md:py-[70px] lg:pl-[100px] lg:py-[100px]">
            <h1 className=" text-4xl lg:text-5xl font-extrabold max-w-[500px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className=" max-w-[550px] text-md text-[#535252] my-[32px]">
              {" "}
              Browse through our diverse range of meticulously crafted garmets,
              designed to bring out your individuality and cater to your sense
              of style
            </p>
            <button className=" w-[210px] h-[52px] rounded-[62px] text-md text-white bg-black">
              {" "}
              Shop Now
            </button>
            <div className=" flex mt-[48px] gap-[32px]">
              <span>
                <p className=" font-semibold text-2xl lg:text-3xl">200+</p>
                <p className=" text-sm text-[#535252]">International Brands</p>
              </span>
              <span className=" h-[100%] w-[1px] bg-[#a9a9a9]"></span>
              <span>
                <p className=" font-semibold text-2xl lg:text-3xl">2,000+</p>
                <p className=" text-sm text-[#535252]">Quality Products</p>
              </span>
              <span className=" h-[100%] w-[1px] bg-[#a9a9a9]"></span>
              <span>
                <p className=" font-semibold text-2xl lg:text-3xl">30,000+</p>
                <p className=" text-sm  text-[#535252]">Happy Customers</p>
              </span>
            </div>
          </div>
          <div className="relative flex justify-center flex-1 px-[20px] lg:px-[50px] overflow-hidden ">
            <img
              src={banner}
              alt=" banner image"
              aria-label=" banner image"
              className=" w-[60%] md:w-[100%] h-auto object-cover"
            />
            <img
              src={bannerIcon}
              alt=""
              className="absolute top-50 left-20  "
            />
            <img
              src={bannerIcon}
              alt=""
              className="absolute top-10 right-10 w-[70px]  "
            />
          </div>
        </div>

        {/* brand banner */}
        <div className=" flex flex-wrap justify-around items-center py-[40px] px-[16px] md:px[30px] lg:px-[70px] gap-[20px] lg:gap-[50px] bg-black ">
          <img src={versace} alt="" className=" h-[20px] lg:h-[30px]" />
          <img src={zara} alt="" className=" h-[20px] lg:h-[30px]" />
          <img src={gucci} alt="" className=" h-[20px] lg:h-[30px]" />
          <img src={prada} alt="" className=" h-[20px] lg:h-[30px]" />
          <img src={calvin} alt="" className=" h-[20px] lg:h-[30px]" />
        </div>
      </section>
    );
}