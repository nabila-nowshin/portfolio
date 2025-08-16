import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiDaisyui,
  SiMongodb,
  SiMysql,
  SiJira,
  SiCplusplus,
  SiJavascript,
  SiNpm,
  SiExpress,
} from "react-icons/si";

export default function Skills() {
  const skillGroups = [
    {
      group: "Frontend Development",
      skills: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600" />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" />,
        },
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-teal-400" />,
        },
        { name: "DaisyUI", icon: <SiDaisyui className="text-yellow-400" /> },
      ],
    },
    {
      group: "Backend & Databases",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-green-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "SQL", icon: <SiMysql className="text-blue-600" /> },
      ],
    },
    {
      group: "Tools & Version Control",
      skills: [
        {
          name: "Git & GitHub",
          icon: <FaGitAlt className="text-orange-600" />,
        },
        { name: "NPM", icon: <SiNpm className="text-red-600" /> },
        { name: "Jira", icon: <SiJira className="text-blue-700" /> },
      ],
    },
    {
      group: "Programming & Algorithms",
      skills: [
        { name: "Python", icon: <FaPython className="text-yellow-400" /> },

        { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 flex items-center gap-3">
          <span className="w-2 h-12 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 rounded-full"></span>
          <h2>Skills</h2>
        </div>

        {/* Skill Groups */}
        {skillGroups.map((group, idx) => (
          <div key={idx} className="mb-12">
            <h3
              className="inline-block px-6 py-2 rounded-2xl mb-3
             bg-base-300/40 backdrop-blur-lg shadow-md
             text-lg md:text-xl lg:text-2xl font-bold
             bg-clip-text text-transparent
             bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
              data-aos="fade-right"
            >
              {group.group}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {group.skills.map((skill, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  className="flex flex-col items-center justify-center p-5 bg-base-300/40 backdrop-blur-3xl rounded-3xl hover:bg-base-200 transition-all"
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl mb-3">
                    {skill.icon}
                  </div>
                  <p className="text-sm md:text-lg  lg:text-xl font-semibold font-mono text-center">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
