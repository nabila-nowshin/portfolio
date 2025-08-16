import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const educationData = [
    {
      degree: "B.Sc. in Electrical & Computer Engineering",
      university: "Rajshahi University of Engineering & Technology (RUET)",
      year: "Graduated June-2025",
      cgpa: "CGPA: 3.86",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      university: "Military Collegiate School Khulna (MCSK)",
      year: "Graduated 2019",
      cgpa: "GPA: 5.0",
    },
  ];

  return (
    <section id="education" className="py-20 bg-base-100 font-mono">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-10 flex items-center gap-3">
          <span className="w-2 h-10 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 rounded-full"></span>
          <h2>Education</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 rounded-full hidden md:block"></div>

          {/* Timeline items */}
          {educationData.map((edu, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="mb-8 flex flex-col md:flex-row md:items-start gap-4 relative"
            >
              {/* Icon */}
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full text-white text-lg mx-auto md:mx-0">
                <FaGraduationCap />
              </div>

              {/* Card */}
              <div className="mt-3 md:mt-0 md:ml-6 flex-1">
                <div className="p-5 bg-base-300/40 backdrop-blur-2xl rounded-2xl shadow-md hover:bg-base-200 transition">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
                    {edu.degree}
                  </h3>
                  <p className="text-sm md:text-lg">{edu.university}</p>
                  <p className="text-xs md:text-sm font-semibold mt-1">
                    {edu.year} | {edu.cgpa}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
