import ladyImg from "../assets/images/lady-sitting.png";
import whiteStar from "../assets/images/white-star.png";
import ashStar from "../assets/images/ash-star.png";

function Guidelines() {
  return (
    <section className="border-b border-white/40 py-3 relative">
      <div className="absolute top-[10%] left-[20%] ">
        <img src={ashStar} alt="ash star" />
      </div>
      <div className="absolute left-[50%] bottom-[10%]">
        <img src={whiteStar} alt="white star" />
      </div>
      <div class="absolute left-5 top-5 md:left-[15%] w-[150px] h-[150px] md:w-[300px]  md:top-[20%] md:h-[300px] bg-gradient-to-t from-[#903AFF] to-transparent rounded-full blur-3xl"></div>
      <div className="w-[90%] relative z-[99] mx-auto grid md:grid-cols-2 gap-4">
        <div className="text-[20px] text-white md:text-[32px] font-clash self-center text-center md:text-start md:ml-10">
          <h2>Rules and</h2>
          <h2 className="text-[#D434FE]">Guidelines</h2>
          <p className="text-[13px] md:text-[14px] w-[80%] mx-auto md:w-full font-montserrat leading-loose">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
        <div className="row-start-1 md:row-start-auto relative ">
          <div class="absolute -right-5 top-[50%]  w-[150px] h-[150px] md:w-[300px]  md:h-[300px] bg-gradient-to-t from-[#903AFF] to-transparent rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <img src={ladyImg} alt="lady sitting" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guidelines;
