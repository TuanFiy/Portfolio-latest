import { motion } from "framer-motion";
import Navbar from "../components/NavbarProjects";
import bgbowl from "../assets/bgbowl.avif";
import BowlFitVideo from "../assets/BowlFitVideo.mp4";

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
                The Bowling Fitness Tracker is a web-based digital platform designed to help Malaysian bowlers from manual record and keep to a digital system.It provides a central place to log workouts, track physical,progress and get exercises tips specifically designed to improve a bowler’s performance on the lane.
              </p>
              <video src={BowlFitVideo} controls className="pt-5 w-full h-auto aspect-video object-cover"></video>
            </div>
            <div className="glass-card p-6 hover:bg-white/5 transition-colors">
              <h3 className="text-xl font-bold text-white">
                Technologies Used
              </h3>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>React.js for the frontend interface</li>
                <li>Node.js and Express for the backend API</li>
                <li>MongoDB for database management</li>
                <li>Chart.js for data visualization</li>
                <li>JWT for user authentication</li>
              </ul>
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
        </div>
      </section>
    </>
  );
};

export default BowlFit;
