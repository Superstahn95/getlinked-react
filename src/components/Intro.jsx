import idea from "../assets/images/idea.png";
import purpleStar from "../assets/images/purple-star.png";
import pinkStar from "../assets/images/pink-star.png";

function Intro() {
  return (
    <section className="border-y border-white/40 py-10">
      <div className="w-[90%] mx-auto  grid gap-4 md:grid-cols-2">
        <div className="md:ml-10 flex ">
          <div className="mt-28">
            <img src={pinkStar} alt="pink star" />
          </div>
          <div>
            <img src={idea} alt="idea" />
          </div>
        </div>
        <div className="self-center">
          <div className="flex items-center justify-between">
            <div className="flex-1 text-[20px] text-center md:text-start md:text-[32px] text-white font-clash">
              <h2>Introduction to getlinked</h2>
              <h2 className="text-[#D434FE]">techHackathon1.0</h2>
            </div>
            <div>
              <img src={purpleStar} alt="purple star" />
            </div>
          </div>
          {/* <div className=""> */}
          <p className="font-montserrat text-[13px] md:text-[14px] w-[80%] mx-auto text-white leading-loose text-center md:text-start md:w-full ">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}

export default Intro;
