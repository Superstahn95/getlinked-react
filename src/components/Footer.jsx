import linkedIn from "../assets/images/linkedIn.png";
import instagram from "../assets/images/instagram.png";
import x from "../assets/images/x.png";
import facebook from "../assets/images/facebook.png";
import call from "../assets/images/call.png";
import location from "../assets/images/location.png";

function Footer() {
  //alterations to be made
  return (
    <footer className="py-10  shadow-2xl bg-[#100B20]">
      <div className="w-[80%] mx-auto ">
        <div className="grid md:grid-cols-3">
          <div className="flex flex-col justify-between ">
            <div>
              <h2 className="text-white text-[15px] md:text-[36px] font-clash leading-none">
                get<span className="text-[#D434FE]">linked</span>
              </h2>
              <p className="font-montserrat text-[12px] text-white leading-loose">
                Getlinked Tech Hackathon is a technology innovation program
                established by a group of organizations with the aim of
                showcasing young and talented individuals in the field of
                technology
              </p>
            </div>
            <p className="font-montserrat text-[12px] text-white my-5 md:my-0">
              Terms of Use <span className="text-[#D434FE]">|</span> Privacy
              Policy
            </p>
          </div>
          {/* useful links segment */}
          <div>
            {/* <h2 className="text-[14px] text-center  text-[#D434FE] mb-3 font-montserrat font-semibold">
              Useful links
            </h2> */}
            <div className="md:flex items-center justify-end h-full">
              <ul className="text-white  text-[12px] font-montserrat  space-y-4 ">
                <li className="text-[14px]   text-[#D434FE] mb-3 font-montserrat font-semibold">
                  Useful links
                </li>
                <li>Overview</li>
                <li>Timeline</li>
                <li>FAQs</li>
                <li>Register</li>
                <li>
                  <div className="flex items-center space-x-4">
                    <span className="text-[#D434FE]">Follow us</span>{" "}
                    <img src={instagram} alt="instagram" />
                    <img src={x} alt="x" />
                    <img src={facebook} alt="facebook" />
                    <img src={linkedIn} alt="linked in" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* contact info */}
          <div className="">
            <div className="md:flex items-center justify-end h-full">
              {/* <h2 className="text-[14px] text-[#D434FE] mb-3 font-montserrat font-semibold">
                Contact Us
              </h2> */}
              <ul className="text-white  text-[12px] font-montserrat  space-y-4 ">
                <li className="text-[14px] text-[#D434FE] mb-3 font-montserrat font-semibold">
                  {" "}
                  Contact Us
                </li>
                <li className="flex items-center">
                  <img src={call} alt="call" />
                  <span>+234 679 81819</span>
                </li>
                <li className="flex ">
                  <img src={location} alt="location" className="w-4 h-4" />
                  <span>
                    27,Alara Street
                    <br /> Yaba 100012 <br /> Lagos State
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
