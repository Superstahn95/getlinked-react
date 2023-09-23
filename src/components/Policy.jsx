import { CheckIcon } from "@heroicons/react/24/solid";
import Button from "./Button";
import padlock from "../assets/images/padlock.png";
import vector from "../assets/images/Vector2.png";

function Policy() {
  return (
    <section className="py-20  border-t border-white/40 shadow-lg">
      <div className="w-[80%] mx-auto grid gap-8 md:grid-cols-2 mt-14">
        <div className="font-clash text-[20px] md:text-[32px] text-white ">
          <h2>Privacy Policy and </h2>
          <h2 className="text-[#D434FE]">Terms</h2>
          <p className="text-white/40 font-montserrat text-[12px] md:text-[14px]">
            Last updated on September 12, 2023
          </p>
          <p className=" font-montserrat mt-5 mb-14 text-[12px] md:text-[14px] w-[289px] md:w-[438px] ">
            Below are our privacy & policy, which outline a lot of goodies. it's
            our aim to always take of our participant
          </p>
          {/* border surrounded container */}
          <div className="border border-[#D434FE]  leading-loose text-[12px] md:text-[14px] rounded-md p-3 md:p-14 mt-10">
            <p className="font-montserrat ">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <p className="text-[13px] md:text-[16px] text-[#D434FE] font-montserrat font-bold">
              Licensing Policy
            </p>
            <p className="font-montserrat">
              Here are terms of our Standard License:
            </p>
            <div className="flex items-center space-x-5 mt-4">
              <div className="rounded-full bg-[#2DE100]">
                <CheckIcon className="text-white w-4 h-4" />
              </div>
              <p className="font-montserrat text-[13px] md:text-[14px]">
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
            </div>
            <div className="flex items-center space-x-5 mt-4">
              <div className="rounded-full bg-[#2DE100]">
                <CheckIcon className="text-white w-4 h-4" />
              </div>
              <p className="font-montserrat text-[13px] md:text-[14px]">
                You are licensed to use the item available at any free source
                sites, for your project developement
              </p>
            </div>

            {/* button component div */}
            <div className="mt-6 text-center">
              <Button text={"Read More"} />
            </div>
          </div>
        </div>
        {/* image container */}
        <div className=" flex justify-center items-center">
          <div className="mt-20 md:mt-14 relative z-[99]">
            <div className="absolute  -top-[22%] left-[10%] -z-10 ">
              <img src={vector} alt="" />
            </div>
            <img src={padlock} alt="padlock" />
          </div>
        </div>
      </div>
    </section>
  );
}
// left-16 -z-10 -top-[22%]
export default Policy;
