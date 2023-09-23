import liberty from "../assets/images/Liberty1.png";
import liberty2 from "../assets/images/Liberty2.png";
import winwise from "../assets/images/Winwise.png";
import visualPlus from "../assets/images/Vizual-plus.png";
import wisper from "../assets/images/wisper.png";

function Partners() {
  return (
    <section className="py-10 border-t border-white/40">
      <div className="w-[90%] mx-auto flex flex-col items-center">
        <h2 className="font-clash text-[20px] md:text-[32px] text-white font-bold">
          Partners and Sponsors
        </h2>
        <p className="text-[12px]  md:text-[14px]  text-center text-white font-montserrat">
          Getlinked Hackathon 1.0 is honored to have the
          <br className="block md:hidden" /> following major
          <br className="hidden md:block" />
          companies as its partners and <br className="block md:hidden" />
          sponsors
        </p>
      </div>

      {/* partners and sponsors logo div */}
      <div className="w-[90%] mt-10 mx-auto border border-[#D434FE] rounded-md md:p-16">
        <div className="grid grid-cols-3 ">
          <div className="self-center flex items-center justify-center border-r-4 border-b-4 w-full h-full border-[#D434FE] px-4 pb-4">
            <img src={liberty} alt="" />
          </div>
          <div className="self-center flex items-center justify-center border-r-4 border-b-4  border-[#D434FE] w-full h-full p-4">
            <img src={liberty2} alt="" />
          </div>
          <div className="self-center flex items-center justify-center w-full h-full p-4 border-b-4 border-[#D434FE]">
            <img src={winwise} alt="" />
          </div>
          <div className="self-center flex items-center justify-center w-full h-full p-4 border-r-4 border-[#D434FE]">
            <img src={visualPlus} alt="" />
          </div>
          <div className="self-center flex items-center justify-center w-full h-full p-4 border-r-4 border-[#D434FE]">
            <img src={liberty} alt="" />
          </div>
          <div className="self-center flex items-center justify-center w-full h-full p-4 ">
            <img src={wisper} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
