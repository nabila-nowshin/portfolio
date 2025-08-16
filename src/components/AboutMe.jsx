import Lottie from "lottie-react";
import lottieFile from "../assets/Programming Computer.json";
export default function About() {
  return (
    <section id="about" className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 items-center gap-12 grid lg:grid-cols-2">
        {/* Image */}
        <div data-aos="fade-up">
          <Lottie animationData={lottieFile} loop={true} />
        </div>

        {/* Text */}
        <div
          data-aos="fade-right"
          className="backdrop-blur-3xl py-5 px-10 bg-base-300/40 rounded-4xl hover:bg-base-200"
        >
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 flex items-center gap-3">
            <span className="w-2 h-12 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 rounded-full"></span>
            <h2>About Me</h2>
          </div>
          <p className="mb-4 text-sm sm:text-base md:text-xl leading-relaxed font-mono ">
            I’m <span className="font-semibold ">Nabila Nowshin</span>, a recent
            graduate from Rajshahi University of Engineering and Technology
            (RUET) with a degree in Electrical and Computer Engineering.
            Throughout my academic journey, I’ve been passionate about exploring
            modern web development technologies and crafting seamless user
            experiences.
          </p>
          <p className="mb-4  text-sm sm:text-base md:text-xl leading-relaxed font-mono">
            My interests span across frontend development, interactive UI
            design, and performance optimization — always striving to create
            digital experiences that are both beautiful and functional.
          </p>
          <p className=" text-sm sm:text-base md:text-xl leading-relaxed font-mono">
            Beyond coding, I’m a curious learner, ready to take on challenges
            and continuously grow as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}
