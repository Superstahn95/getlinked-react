import trophy from "../assets/images/trophy.png";
import gold from "../assets/images/gold_medal.png";
import silver from "../assets/images/silver_medal.png";
import bronze from "../assets/images/bronze_medal.png";
import PostionDetails from "./PostionDetails";
import { prizes } from "../assets/data";
import whiteStar from "../assets/images/white-star.png";
import pinkStar from "../assets/images/pink-star.png";
import ashStar from "../assets/images/ash-star.png";

function Prizes() {
  return (
    <section className="py-10 shadow-lg relative">
      <div className="absolute top-10 left-[13%]  ">
        <img src={pinkStar} alt="pink-star" />
      </div>
      <div className="absolute -right-7 top-[50%]  w-[150px] h-[150px] md:w-[300px]  md:h-[300px] bg-gradient-to-t from-[#903AFF] to-transparent rounded-full blur-3xl"></div>
      <div className="w-[90%] mx-auto text-[20px]  text-white md:text-[32px] font-clash flex flex-col mb-10 ">
        <div className="self-end w-full min-w-[40%] md:w-[40%] ">
          <h2 className="leading-none  text-center md:text-start">
            Prizes and
          </h2>
          <h2 className="text-[#D434FE] text-center md:text-start">Rewards</h2>
          <p className="text-[12px] md:text-[16px]  text-center md:text-start md:w-full font-montserrat leading-loose">
            Highlight of the prizes or rewards for winners
            <br className="block md:hidden" /> and{" "}
            <br className="hidden md:block" />
            for participants.
          </p>
        </div>
      </div>
      {/* grid container */}
      <div className="w-[90%] mx-auto grid md:grid-cols-2 gap-10">
        <div className="relative">
          <div className="absolute bottom-0 left-[40%]  ">
            <img src={whiteStar} alt="white-star" />
          </div>
          <div className="absolute left-10  w-[150px] h-[150px] md:w-[300px]  md:h-[300px] bg-gradient-to-t from-[#903AFF] to-transparent rounded-full blur-3xl"></div>
          <div className="relative z-10 ">
            <img src={trophy} alt="trophy image" />
          </div>
        </div>
        <div className="text-[20px] relative  text-white md:text-[32px] font-clash grid">
          <div className="absolute -top-7 right-[10%]  ">
            <img src={whiteStar} alt="ash-star" />
          </div>
          <div className="absolute -bottom-5 right-[40%]  ">
            <img
              src={ashStar}
              alt="ash-star"
              className="w-4 h-4 md:w-full md:h-full"
            />
          </div>
          {/* prizes container */}
          <div className="mt-16  grid grid-cols-3 gap-5 md:gap-10 self-end md:mb-10">
            <PostionDetails
              medal={silver}
              position={"2nd"}
              altText="silver medal"
              prizeMoney="N300,000"
            />
            <PostionDetails
              medal={gold}
              position={"1st"}
              altText="gold medal"
              prizeMoney="N400,000"
            />
            <PostionDetails
              medal={bronze}
              position={"3rd"}
              altText="bronze medal"
              prizeMoney="N150,000"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prizes;
