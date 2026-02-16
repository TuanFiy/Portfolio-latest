import { motion } from "framer-motion";
import Navbar from "../components/NavbarProjects";
import bgbowl from "../assets/bgbowl.avif";
import BowlFitVideo from "../assets/BowlFitVideo.mp4";
import poster from "../assets/poster.png";
import { href } from "react-router-dom";

const BowlFit = () => {
  return (
    <>
      <Navbar />
      <section
        className="h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${bgbowl})` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-600"
          >
            BOWLING FITNESS TRACKER
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-xl md:text-2xl text-gray-300"
          >
            A Web-based Performance and Tracking for Bowling Enthusiasts.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <div className="flex gap-4 items-center justify-center">
              <a
                href="#projects"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <section id="projects" className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
            <span className="w-12 h-1 bg-blue-500 rounded-full"></span>
            Project Details
          </h2>
          <div className="space-y-6">
            <div className="glass-card p-6 hover:bg-white/5 transition-colors">
              <h3 className="text-xl font-bold text-white">Overview</h3>
              <p className="text-gray-300 mt-2">
                The Bowling Fitness Tracker is a web-based digital platform
                designed to help Malaysian bowlers from manual record and keep
                to a digital system.It provides a central place to log workouts,
                track physical,progress and get exercises tips specifically
                designed to improve a bowler’s performance on the lane.
              </p>
              <video
                src={BowlFitVideo}
                controls
                className="pt-5 w-full h-auto aspect-video object-cover"
              ></video>
            </div>
            <div className="glass-card p-6 hover:bg-white/5 transition-colors">
              <h3 className="text-xl font-bold text-white">
                FYP Project - Final Year Project (Poster)
              </h3>
              <img
                src={poster}
                alt="Bowl Fit Poster"
                className="mt-4 w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-2 flex flex-col gap-6 md:flex-row">
              <div className="glass-card p-6 hover:bg-white/5 transition-colors">
                <h3 className="text-xl font-bold text-white">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-2 py-1 bg-white/10 rounded text-xs">
                    ASP.Net
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs">
                    HTML
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs">
                    CSS
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs">
                    C#
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs">
                    SQL Server
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs">
                    JavaScript
                  </span>
                </div>
              </div>
              <div className="glass-card p-6 hover:bg-white/5 transition-colors">
                <h3 className="text-xl font-bold text-white">Key Features</h3>
                <ul className="list-disc list-inside text-gray-300 mt-2">
                  <li>
                    Session Tracking: Users can log their bowling sessions,
                    including the number of games, scores, and duration.
                  </li>
                  <li>
                    Performance Analysis: The app provides insights into users'
                    performance trends and areas for improvement.
                  </li>
                  <li>
                    Goal Setting: Users can set fitness goals related to their
                    bowling performance and track their progress over time.
                  </li>
                  <li>
                    Community Sharing: Users can share their achievements and
                    connect with other bowling enthusiasts.
                  </li>
                </ul>
              </div>
            </div>
            <div className="glass-card p-6 hover:bg-white/5 transition-colors">
              <h3 className="text-xl font-bold text-white">Design</h3>
              <p className="text-gray-300 mt-2">
                The design of the Bowling Fitness Tracker focuses on a clean and
                intuitive user interface, with a modern aesthetic that appeals
                to bowlers of all ages. The use of vibrant colors and engaging
                visuals enhances the user experience, making it easy for users
                to navigate through their fitness journey. The design tools used
                for the project include Figma for UI/UX design.
              </p>
              <button
                type="submit"
                className="mt-4 w-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                onClick={() =>
                  window.open(
                    "https://www.figma.com/design/g3YPUVGGZWEjTkaDCF9Zpw/Untitled?node-id=0-1&t=l90P6BwJPOZ8hwux-1",
                    "_blank",
                  )
                }
              >
                View Design in Figma
              </button>
            </div>
            <div className="glass-card p-6 hover:bg-white/5 transition-colors">
              <h3 className="text-xl font-bold text-white">Conclusion</h3>
              <p className="text-gray-300 mt-2 text">
                The Bowling Fitness Tracker is a web-based system that
                successfully provides a specialized web-based solution for
                performance monitoring and coaching management. Developed using
                ASP.NET Core and SQL Server, the system effectively bridges the
                gap between raw data and athletic improvement by using Chart.js
                to visualize progress. By connecting Bowlers, Coaches, and
                Admins within a single secure platform, the project achieves its
                goal of modernizing bowling training. This application provides
                a scalable foundation that is ready for future enhancements,
                such as integration with wearable fitness technology and mobile
                app development, ensuring that it can continue to meet the
                evolving needs of the bowling community.
              </p>
            </div>
            <div className="glass-card p-6 hover:bg-white/5 transition-colors">
              <h3 className="text-xl font-bold text-white">
                Github Repository
              </h3>
              <button
                type="submit"
                className="mt-4 w-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                onClick={() =>
                  window.open(
                    "https://github.com/TuanFiy/Bowling-Fitness-Tracker",
                    "_blank",
                  )
                }
              >
                View GitHub Repository
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BowlFit;
