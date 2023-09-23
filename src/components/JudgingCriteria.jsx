import judgeImg from "../assets/images/two-men.png";
import { jugdingCriteria } from "../assets/data";
import Button from "./Button";
import whiteStar from "../assets/images/white-star.png";
import ashStar from "../assets/images/ash-star.png";
import pinkStar from "../assets/images/pink-star.png";
import purpleStar from "../assets/images/purple-star.png";

function JudgingCriteria() {
  return (
    <section className="py-14 relative border-b border-white/40">
      <div className="absolute bottom-10 left-[90%] md:left-[40%] ">
        <img src={whiteStar} alt="white-star" />
      </div>
      <div class="absolute right-0  -bottom-4  w-[150px] h-[150px] md:w-[300px]  md:h-[300px] bg-gradient-to-t from-[#903AFF] to-transparent rounded-full blur-3xl"></div>
      <div className="w-[90%] mx-auto grid md:grid-cols-2 ">
        <div className="self-center relative">
          <div className="absolute -top-10 left-[40%]">
            <img src={purpleStar} alt="purple-star" />
          </div>
          <div class="absolute bottom-0 left-0 w-[150px] h-[150px] md:w-[300px]   md:h-[300px] bg-gradient-to-t from-[#903AFF] to-transparent rounded-full blur-3xl"></div>
          <img src={judgeImg} alt="" />
        </div>
        <div className="text-[20px] text-white md:text-[32px] font-clash self-center text-center md:text-start ">
          <div className="mb-3">
            <h2>Judging Criteria</h2>
            <h2 className="text-[#D434FE]">Key attributes</h2>
          </div>
          {jugdingCriteria.map((criteria) => (
            <p
              key={criteria.title}
              className="w-[80%] mx-auto font-montserrat pb-3 md:pb-7 text-[13px] md:text-[14px] md:w-full relative z-10"
            >
              <span className="text-[#FF26B9] font-bold">
                {criteria.title}:
              </span>{" "}
              {criteria.description}
            </p>
          ))}
          <Button text={"Read More"} />
        </div>
      </div>
    </section>
  );
}

export default JudgingCriteria;
