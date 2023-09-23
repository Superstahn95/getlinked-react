import chainImg from "../assets/images/chain.png";
import vrMan from "../assets/images/man.png";
import lighting from "../assets/images/lighting.png";
import fire from "../assets/images/fire.png";
import creative from "../assets/images/creative.png";
import whiteStar from "../assets/images/white-star.png";
import ashStar from "../assets/images/ash-star.png";
import Button from "./Button";

function Hero() {
  return (
    <header className="min-h-[90vh] flex flex-col  ">
      <section className="text-white  flex flex-col items-center justify-center relative flex-1">
        {/*absolute positioned background stars */}

        <div className=" text-[14px] mt-4 md:mt-0 md:absolute md:top-5 md:right-7 font-montserrat md:text-[36px]  font-bold italic">
          <h2>
            Igniting a Revolution in{" "}
            <span className="my-underline"> HR innovation</span>{" "}
          </h2>
        </div>
        {/* background patch */}
        <div className="absolute left-5 top-5 md:left-[20%] w-[150px] h-[150px] md:w-[300px]  md:-top-16 md:h-[300px] bg-gradient-to-t from-[#903AFF] to-transparent rounded-full blur-3xl"></div>
        {/* backdrop-blur-lg blur-3xl */}
        <div className="w-[95%]  md:ml-auto grid md:grid-cols-2  ">
          {/* header div container */}
          <div className="md:mt-24 mt-14 relative ">
            {/* <div class="absolute -top-24 left-1/4 w-1/2 h-[100%]  z-[-1]  bg-gradient-to-b from-[#903AFF] via-transparent to-transparent filter blur-3xl"></div> */}
            <div className="absolute -top-7 md:-top-16 left-10">
              <img src={whiteStar} alt="white star " />
            </div>
            <div className="absolute bottom-[20%] right-10">
              <img src={ashStar} alt="white star " />
            </div>
            <div>
              <div className="relative  ">
                {/* <div className="absolute w-[18px] h-[26px] md:w-fit md:h-fit -top-12 right-6">
                  <img src={creative} alt="bulb" />
                </div> */}
                <h1 className="text-[32px] text-center md:text-start font-clash  leading-none md:text-[80px]  ">
                  getlinked Te
                  <span className="relative">
                    ch
                    <div className="absolute w-[18px] h-[26px] md:w-fit md:h-fit -top-3 left-3 md:-top-10 md:left-4 ">
                      <img src={creative} alt="bulb" />
                    </div>{" "}
                  </span>
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center relative">
                <h1 className="text-[32px] w-full text-center  md:text-start font-clash  leading-none md:text-[80px] self-center">
                  Hackathon{" "}
                  <span className="text-[#D434FE] relative">
                    1.0{" "}
                    <div className="absolute flex items-center top-0 -right-[110%]">
                      <img
                        src={chainImg}
                        alt="chain image"
                        className="w-[33px] md:w-full"
                      />
                      <img
                        src={fire}
                        alt="fire"
                        className="w-[23px] md:w-full"
                      />
                    </div>
                  </span>
                </h1>
              </div>
              <p className="text-13px mt-3  text-center md:text-start  md:text-[20px] w-full font-montserrat">
                Participate in getlinked tech Hackathon 2023 stand
                <br /> a chance to win a Big prize
              </p>
              <div className="mt-7  text-center md:text-start">
                <Button text={"Register"} />
              </div>
            </div>
            <div className=" font-unica text-[48px] md:text-[64px] flex items-center mt-7  justify-center md:justify-start ">
              <h1>
                00<span className="text-[14px]">H</span>
              </h1>
              <h1>
                00<span className="text-[14px]">M</span>
              </h1>
              <h1>
                00<span className="text-[14px]">S</span>
              </h1>
            </div>
          </div>
          {/* image div */}
          <div
            style={{
              backgroundImage: `url(${vrMan})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "-50px 40px",
            }}
            className="relative  bg-top-1/4 "
          >
            <div className="absolute top-[15%] left-1/4 w-1/2 h-1/2 rounded-full   bg-gradient-to-b from-[#903aff] via-transparent to-transparent filter blur-3xl"></div>
            <div className="relative -left-7">
              <img src={lighting} alt="lighting" />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Hero;
