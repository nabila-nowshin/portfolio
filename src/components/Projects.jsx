import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";

import project1 from "../assets/project_1.png";
import project2 from "../assets/project_2.png";
import project3 from "../assets/project_3.png";
import project4 from "../assets/project_4.png";
import project5 from "../assets/project_5.png";

const allProjects = [
  {
    name: "Lifeline Connect",
    description:
      "Full-stack MERN app connecting blood donors, recipients, and volunteers with secure role-based dashboards and donation management.",
    features: [
      "Authentication & Authorization (Firebase & JWT)",
      "Role-based dashboards: Admin, Volunteer, Donor",
      "Request & manage blood donations with filtering & pagination",
      "Create blogs with rich text editor (Jodit)",
      "Track funding progress (Admins only)",
      "Image upload via imgbb API",
      "Interactive UI with SweetAlert2 for alerts",
    ],
    tech: [
      "React",
      "React Router",
      "Tailwind CSS",
      "DaisyUI",
      "Axios",
      "TanStack Query",
      "Firebase",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    animation: project1,
    github: "https://github.com/nabila-nowshin/lifeline-connect-client",
    live: "https://lifeline-connect-78f2e.web.app/",
  },
  {
    name: "JourneyBay",
    description:
      "Full-stack MERN tour booking platform enabling users to explore, book, and manage tour packages with authentication and real-time interactions.",
    features: [
      "Authentication via Firebase (Email/Password & Google)",
      "Explore, Book, Add & Manage Tour Packages",
      "Full CRUD Functionality",
      "Booking Requests with Status Tracking",
      "Protected Routes (JWT & Firebase Admin)",
      "Light/Dark Theme Toggle",
      "Search by Package Name (Regex-based)",
      "Responsive Design for Mobile & Desktop",
      "Interactive UI with Toast Notifications, Sweet Alerts & Lottie Animations",
    ],
    tech: [
      "React",
      "React Router",
      "Tailwind CSS",
      "DaisyUI",
      "Axios",
      "Firebase",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    animation: project2,
    github: "https://github.com/nabila-nowshin/journey-bay-client",
    live: "https://journeybay-7e99c.web.app/",
  },
  {
    name: "Window Tiler",
    description:
      "React & TypeScript-based tiling window system inspired by desktop OS. Users can create draggable, snappable windows that can be nested inside one another.",
    features: [
      "Create windows with random colors and initial positions",
      "Move windows by dragging their title bars",
      "Snap windows to any screen edge with transparent preview overlay",
      "Nested snapping inside other windows (top, bottom, left, right)",
      "Close windows with a close button; layouts update dynamically",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS"],
    animation: project3,
    github: "https://github.com/nabila-nowshin/window-tiler",
    live: "https://windows-tiler-6f6ea.web.app/",
  },
  {
    name: "SliceMaster Pizza Shop",
    description:
      "A sleek React + TypeScript + Redux Toolkit app for ordering pizzas with a dynamic cart, built for fun and learning!",
    features: [
      "Browse delicious pizzas with name and price",
      "Add pizzas to cart with quantity management",
      "Remove entire items or decrement quantity one by one",
      "Real-time cart total items and price calculation",
      "Clean, responsive UI styled with Tailwind CSS",
      "State managed with Redux Toolkit and fully typed with TypeScript",
      "Easy to extend with backend or payment integration",
    ],
    tech: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
    animation: project4,
    github: "https://github.com/nabila-nowshin/slice-master",
    live: "https://slice-master-pizza-shop.netlify.app/",
  },
  {
    name: "Stone Paper Scissors",
    description:
      "A small JS game to play against the computer with auto-play and persistent score using localStorage.",
    features: [
      "Play Rock, Paper, Scissors against AI",
      "Auto-play every second",
      "Persistent score stored in localStorage",
    ],
    tech: ["Vanilla JS", "HTML", "CSS"],
    animation: project5,
    github: "https://github.com/nabila-nowshin/rockPaperScissorGame",
    live: "https://nabila-nowshin.github.io/rockPaperScissorGame/",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // inside your Projects component
  const [projectsPerPage, setProjectsPerPage] = useState(2);

  // Listen to screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setProjectsPerPage(1);
      } else {
        setProjectsPerPage(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const techFilters = [
    "All",
    "React",
    "Node.js",
    "TypeScript",
    "Redux Toolkit",
    "Firebase",
    "Vanilla JS",
    // "Python",
    // "ML",
  ];

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((project) => project.tech.includes(filter));

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  return (
    <section id="projects" className="pt-20 md:pt-30">
      <div className="max-w-7xl w-11/12 mx-auto px-4 ">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="w-2 h-12 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 rounded-full"></span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Projects
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          {techFilters.map((tech, idx) => (
            <button
              key={idx}
              onClick={() => {
                setFilter(tech);
                setCurrentPage(1);
              }}
              className={`px-2 py-1 lg:px-4 lg:py-2 rounded-full font-mono transition-all ${
                filter === tech
                  ? "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white"
                  : "bg-base-300/40 backdrop-blur-3xl hover:bg-base-200"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {paginatedProjects.map((project, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              className="p-5 bg-base-300/40 backdrop-blur-3xl rounded-4xl hover:bg-base-200 transition-all"
            >
              <div className="w-full mb-4 flex justify-center">
                <img
                  src={project.animation}
                  alt={project.name}
                  className="w-full max-h-48 md:max-h-56 lg:max-h-64 object-contain rounded-2xl"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="mb-3 md:mb-5  md:text-lg">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3 md:mb-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-lg bg-accent/20 text-accent hover:bg-accent/30 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mb-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 rounded-lg bg-gray-800 hover:bg-gray-900 text-white font-mono hover:brightness-110 transition flex items-center gap-1"
                >
                  <FiGithub /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 rounded-lg bg-blue-700 hover:bg-blue-600 text-white font-mono hover:brightness-110 transition flex items-center gap-1"
                >
                  <FiExternalLink /> Live
                </a>
              </div>
              <button
                onClick={() =>
                  document.getElementById(`modal-${idx}`).showModal()
                }
                className="btn btn-sm btn-outline"
              >
                View Details
              </button>
              <dialog id={`modal-${idx}`} className="modal">
                <div className="modal-box relative max-w-3xl rounded-2xl bg-base-100 shadow-2xl border border-base-300">
                  {/* Close button */}
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 hover:bg-base-200">
                      ✕
                    </button>
                  </form>

                  {/* Project Title */}
                  <h3 className="text-2xl font-bold mb-3 text-primary">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-base-content/80 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Features */}
                  {project.features.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-lg mb-2 text-base-content">
                        Key Features:
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-base-content/90">
                        {project.features.map((feat, i) => (
                          <li key={i}>{feat}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline btn-sm flex items-center gap-2"
                    >
                      <FiGithub className="w-4 h-4" /> GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary btn-sm flex items-center gap-2"
                    >
                      <FiExternalLink className="w-4 h-4" /> Live
                    </a>
                  </div>
                </div>
              </dialog>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-4 mt-6 relative z-20 flex-wrap">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="px-4 py-2 rounded-lg transition btn btn-soft"
            >
              Previous
            </button>

            {/* Numbered buttons: hidden on small screens */}
            <div className="hidden sm:flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded-lg transition ${
                    currentPage === i + 1
                      ? "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white"
                      : "btn btn-soft"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className="px-4 py-2 rounded-lg btn btn-soft transition"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
