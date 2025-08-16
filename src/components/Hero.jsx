import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import profile from "../assets/nabila.jpg";
import resume from "../assets/NABILA NOWSHIN_resume.pdf";
import { MdOutlineCloudDownload } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section
      className="relative pt-28 md:pt-32 pb-16  md:px-12 flex flex-col md:flex-row items-center justify-center font-poppins overflow-hidden max-w-7xl mx-auto"
      id="home"
    >
      {/* Background Blobs */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 opacity-20 rounded-full animate-blob animation-delay-2000 z-0"></div>
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-200 opacity-20 rounded-full animate-blob animation-delay-4000 z-0"></div>

      {/* Left: Intro */}
      <div className="md:w-1/2  mb-12 md:mb-0 relative z-10 animate-fade-in-left backdrop-blur-3xl py-5 px-10 bg-base-300/40 rounded-4xl hover:bg-base-200">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
          Hi, I’m Nabila
        </h1>

        <h2
          className="text-lg sm:text-xl md:text-3xl mb-6 font-medium font-mono"
          style={{ color: "var(--color-primary)" }}
        >
          Full Stack Developer |
          <span className="text-sm sm:text-lg md:text-2xl">
            <Typewriter
              options={{
                strings: [
                  "Electrical & Computer Engineering Graduate",
                  "React & TypeScript Enthusiast",
                  "Passionate About Clean Code",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h2>
        <p
          className="mb-6 text-sm sm:text-base md:text-xl leading-relaxed font-mono"
          style={{ color: "var(--text-primary)" }}
        >
          I create clean and interactive web applications with modern
          technologies. I love turning ideas into beautiful, functional digital
          experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          {/* Primary Button */}
          <a
            href={resume}
            download
            className="font-sans px-6 py-2 rounded-lg text-white flex gap-2 items-center
             bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
             transition-all duration-300 transform hover:scale-105 hover:brightness-110"
          >
            <MdOutlineCloudDownload />
            Download Resume
          </a>

          {/* Secondary Button */}
          <a
            href="#contact"
            className="font-sans px-6 py-2 rounded-lg text-white flex gap-2 items-center
             bg-purple-500 hover:bg-purple-600
             transition-all duration-300 transform hover:scale-105"
          >
            <BiSolidPhoneCall />
            Contact Now
          </a>
        </div>
        {/* Social Icons */}
        <div className="flex gap-4 mt-4">
          <a
            href="mailto:your.email@example.com"
            className="text-xl text-gray-700 hover:text-blue-500 transition-colors"
          >
            <FiMail />
          </a>
          <a
            href="https://github.com/nabila-nowshin"
            target="_blank"
            rel="noreferrer"
            className="text-xl text-gray-700 hover:text-blue-500 transition-colors"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nabila-nowshin-697467292/"
            target="_blank"
            rel="noreferrer"
            className="text-xl text-gray-700 hover:text-blue-500 transition-colors"
          >
            <FiLinkedin />
          </a>
        </div>
      </div>

      {/* Right: Profile Photo */}
      <div className="md:w-1/2 flex justify-center md:justify-end relative z-10 animate-fade-in-right">
        <div
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-xl overflow-hidden shadow-xl border"
          style={{ borderColor: "var(--color-primary)" }}
        >
          <img
            src={profile}
            alt="Nabila"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
