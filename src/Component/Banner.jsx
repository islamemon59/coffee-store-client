/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(more/3.png)",
      }}
    >
      <div className="hero-overlay flex justify-end md:px-20 overflow-hidden">
        <div className="hero-content text-neutral-content">
          <div className="max-w-5xl text-start">
            <motion.h1
              initial={{ x: 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              className="mb-5 text-5xl font-bold rancho overflow-hidden"
            >
              Would you like a Cup of Delicious Coffee?
            </motion.h1>
            <motion.p
              initial={{ x: 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.6 },
                ease: "easeIn",
              }}
              className="mb-5 rancho overflow-hidden"
            >
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </motion.p>
            <motion.button
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.6 },
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ x: 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.6,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.6 },
                ease: "easeIn",
              }}
              className="btn text-2xl bg-base-300 hover:bg-base-200 text-secondary border-none outline-none rounded-xs rancho overflow-hidden"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
