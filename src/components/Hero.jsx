import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import profile from "../assets/nabila.jpg";
import resume from "../assets/NABILA NOWSHIN_resume.pdf";

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 pb-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center font-poppins overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 opacity-20 rounded-full animate-blob animation-delay-2000 z-0"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-200 opacity-20 rounded-full animate-blob animation-delay-4000 z-0"></div>

      {/* Left: Intro */}
      <div className="md:w-1/2 max-w-lg mb-12 md:mb-0 relative z-10 animate-fade-in-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Hi, I’m Nabila
        </h1>
        <h2
          className="text-lg sm:text-xl md:text-2xl mb-6 font-medium"
          style={{ color: "var(--color-primary)" }}
        >
          Frontend Developer | React & TypeScript Enthusiast
        </h2>
        <p
          className="mb-6 text-sm sm:text-base md:text-lg leading-relaxed"
          style={{ color: "var(--text-primary)" }}
        >
          I create clean and interactive web applications with modern
          technologies. I love turning ideas into beautiful, functional digital
          experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <a
            href={resume}
            download
            className="px-6 py-2 rounded-lg font-medium transition-colors hover:opacity-90"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-base)",
            }}
          >
            Download Resume
          </a>

          {/* Social Icons */}
          <div className="flex gap-3 text-xl mt-2 sm:mt-0">
            <a
              href="https://github.com/nabila-nowshin"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--text-primary)" }}
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nabila-nowshin-697467292/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--text-primary)" }}
            >
              <FiLinkedin />
            </a>
          </div>
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
