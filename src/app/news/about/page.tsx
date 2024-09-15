import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5 m-10">
        <div>
            <Link className="underline" href="/news">Back to Dashboard</Link>
        </div>
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About Me</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Welcome to my about page! I'm a passionate entry-level full stack
          developer eager to make an impact in the tech world.
        </p>
      </section>

      {/* Profile Section */}
      <section className="flex flex-col items-center text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Hi, I'm Adaeze Ugwumba
        </h2>
        <p className="text-gray-600 mt-2">
          I specialize in both front-end and back-end development, and I'm
          enthusiastic about building dynamic and responsive web applications.
          With a foundation in modern technologies and a strong desire to grow,
          I am excited to contribute to innovative projects and collaborate with
          talented teams.
        </p>
      </section>

      {/* Experience Section */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <h2 className="text-3xl text-center font-semibold text-gray-900 mb-6">
          My Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Full Stack Developer Intern
            </h3>
            <p className="text-gray-600">
              Gained hands-on experience in developing full-stack applications
              using technologies such as React, Node.js, and Express. Worked on
              integrating APIs, designing user interfaces, and optimizing
              performance.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Personal Projects
            </h3>
            <p className="text-gray-600">
              Developed several personal projects including a task management
              app and a portfolio website. Focused on creating user-friendly
              interfaces and implementing CRUD functionalities with React and
              TypeScript.
            </p>
          </div>
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
