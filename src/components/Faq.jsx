import { Disclosure } from "@headlessui/react";
import thinking from "../assets/images/thinking-man.png";
import { faqs } from "../assets/data";
import whiteStar from "../assets/images/white-star.png";
import purpleStar from "../assets/images/purple-star.png";
import pinkStar from "../assets/images/pink-star.png";
import ashStar from "../assets/images/ash-star.png";

function Faq() {
  return (
    <section id="faq" className="py-10 border-b border-white/40">
      <div className="w-[80%] mx-auto grid gap-4 md:grid-cols-2">
        <div className="text-[20px] text-white md:text-[32px] font-clash self-center text-center md:text-start ">
          <h2>Frequently Ask</h2>
          <h2 className="text-[#D434FE]">Question</h2>
          <p className="text-[13px] md:text-[14px] w-[80%] mx-auto md:w-full font-montserrat leading-loose">
            We got answers to the questions that you might
          </p>
          <p className="text-[13px] md:text-[14px] w-[80%] mx-auto md:w-full font-montserrat leading-loose">
            want to ask about getlinked Hackathon 1.0
          </p>
          {/* headless ui component here */}
          <div className="mt-7">
            {faqs.map((faq) => (
              <Disclosure key={faq}>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${
                        !open ? "border-b border-[#D434FE]" : null
                      } py-2 flex w-full items-center justify-between text-start  font-montserrat  mr-28 text-[12px] md:text-[14px] `}
                    >
                      {faq}{" "}
                      <span className="text-[20px] text-[#D434FE]">+</span>
                    </Disclosure.Button>
                    <Disclosure.Panel
                      className={`${
                        open ? "border-b border-[#D434FE]" : null
                      } font-montserrat text-[10px] md:text-[12px] `}
                    >
                      Some appropriate getlinked response
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
        <div className="relative mt-20 ">
          <div className="absolute bottom-0 right-14 ">
            <img src={whiteStar} alt="white-star" />
          </div>
          <div className="absolute top-[50%] left-5 ">
            <img src={ashStar} alt="ash-star" />
          </div>
          <div className="absolute top-[10%] left-[10%] ">
            <img src={pinkStar} alt="pink-star" />
          </div>
          <div className="absolute left-[30%] -top-[15%] md:-top-[23%]">
            <h2 className="font-tommy md:text-[128px] text-[64px] text-[#D434FE]">
              ?
            </h2>
          </div>
          <div className="absolute left-[10%] md:left-[5%] -top-[5%] md:-top-[13%]">
            <h2 className="font-tommy md:text-[96px] text-[40px] text-[#A866FD]">
              ?
            </h2>
          </div>
          <div className="absolute right-[40%] md:right-[33%] -top-[5%] md:-top-[13%]">
            <h2 className="font-tommy md:text-[96px] text-[40px] text-[#A866FD]">
              ?
            </h2>
          </div>
          <img src={thinking} alt="thinking man" />
        </div>
      </div>
    </section>
  );
}

export default Faq;
