import judgeImg from "../assets/images/two-men.png";
import { jugdingCriteria } from "../assets/data";
import Button from "./Button";

function JudgingCriteria() {
  return (
    <section className="py-14 border-b border-white/40">
      <div className="w-[90%] mx-auto grid md:grid-cols-2 ">
        <div className="self-center">
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
              className="w-[80%] mx-auto font-montserrat pb-3 md:pb-7 text-[13px] md:text-[14px] md:w-full "
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
