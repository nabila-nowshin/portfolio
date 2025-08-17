import { FiMail, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative bg-base-200 py-12 overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-20 filter blur-3xl animate-blob mix-blend-multiply"></div>
      <div className="absolute -bottom-20 -right-16 w-96 h-96 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 rounded-full opacity-20 filter blur-3xl animate-blob animation-delay-2000 mix-blend-multiply"></div>

      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        {/* Logo / Name */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          Nabila Nowshin
        </h2>

        {/* Tagline */}
        <p className="text-base-content/70 italic text-sm md:text-lg">
          Building modern web experiences with passion ✨
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 text-lg md:text-xl lg:text-2xl text-base-content/70 mt-2">
          <a
            href="mailto:nabilanowshin327@gmail.com"
            target="_blank"
            rel="noreferrer"
            title="Email"
            className="hover:scale-125 transition-transform duration-300"
          >
            <FiMail />
          </a>
          <a
            href="https://github.com/nabila-nowshin"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            className="hover:scale-125 transition-transform duration-300"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nabila-nowshin-697467292/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            className="hover:scale-125 transition-transform duration-300"
          >
            <FiLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-sm text-base-content/60">
          &copy; {new Date().getFullYear()} Nabila Nowshin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
