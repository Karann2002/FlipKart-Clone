import React from "react";
import { Outlet, Link } from "react-router-dom";
// import { useState } from 'react'
import Navbar from "../Components/Common/Navbar";
import { motion } from "framer-motion";
import { useInView } from "../../src/useInView";

const AuthLayout = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  return (
    <div className="h-full">
      <div className="flex  flex-col">
        <Link to="/">
          <h1 className="absolute text-xl top-15 z-50 p-2 font-bold">
            <img
              src="../../../public/fkheaderlogo_exploreplus-44005d.svg"
              alt=""
            />
          </h1>
        </Link>
      </div>
      <div
        className="relative flex flex-row min-h-screen top-0  justify-center bg-cover bg-center px-4 py-12 sm:px-6 lg:px-8 "
      >
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/13315369_3840_2160_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="hidden lg:flex w-1/2 items-center justify-center bg-cover bg-center px-12 relative"
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 max-w-md space-y-6 text-white ">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-6xl font-bold"
            >
              Welcome to FlipMart
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-lg"
            >
              Discover, shop, and manage your store with ease. Explore a modern
              shopping experience.
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-1 items-center justify-center bg-cover bg-center px-4 py-12 sm:px-6 lg:px-8  inset-0 bg-black/50"
        >
          <div className="   p-2 shadow-lg rounded-xl w-full max-w-md ">
            <Outlet />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthLayout;
