import Link from "next/link";
import Image from "next/image";
import ClothImg from "../../public/clothing.png";
import Todo from "../../public/todo.jpeg";
import Portal from "../../public/portal.png";
import Node from "../../public/nodejs.png"

export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description:
        "This is a project I worked on that showcases my skills in Javascript and CSS. It is a clothing store website.",
      link: "https://angee-web.github.io/CLOTHING/#",
      image: ClothImg,
    },
    {
      title: "Project Two",
      description:
        "A simple to-do list app that I built using React. It allows users to add, edit, and delete tasks. It saves user tasks in local storage.",
      link: "https://to-do-list-rouge-two.vercel.app/",
      image: Todo,
    },
    {
      title: "Project Three",
      description:
        "A simple instagram dub created with React. It allows users to create posts, delete posts, and like posts. User info is added to the database.",
      link: "https://vercel.com/adaeze-ugwumbas-projects/image-portal-frontend",
      image: Portal,
    },
    {
      title: "Project Four",
      description:
        "A simple backend set up for school use. Includes implementation of CRUD operations. Allows both student and instructors to sign in.",
      link: "https://school-app-e6cf.onrender.com",
      image: Node,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="ml-5">
        <Link className="underline" href="/news">
          Back to Dashboard
        </Link>
      </div>

      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          My Projects
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Here are some of the projects I have worked on. Each project showcases
          different aspects of my skills and expertise.
        </p>
      </section>

      {/* Project Cards Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              {/* Use Image component for Next.js images */}
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill" // Fills the container
                  objectFit="cover" // Ensures the image covers the container
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center mt-12 py-6 border-t border-gray-200">
        <p className="text-gray-600">
          © 2024 Adaeze Ugwumba. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
