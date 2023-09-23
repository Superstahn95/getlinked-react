import trophy from "../assets/images/trophy.png";
import gold from "../assets/images/gold_medal.png";
import silver from "../assets/images/silver_medal.png";
import bronze from "../assets/images/bronze_medal.png";
import PostionDetails from "./PostionDetails";
import { prizes } from "../assets/data";

function Prizes() {
  return (
    <section className="py-7 shadow-lg">
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
        <div>
          <img src={trophy} alt="trophy image" />
        </div>
        <div className="text-[20px]   text-white md:text-[32px] font-clash grid">
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
