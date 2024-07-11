/* eslint-disable no-unused-vars */
import React from 'react';
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion"

const AboutComponent = () => {
  return (
    <section  className="border-b border-neutral-900 pb-4">
      <motion.h1 whileInView={{opacity:1,x:0}} initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:0}} className="my-16 text-center text-gray-700 text-4xl">
        About <motion.span initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:0.5}} className="text-gray-400">Me</motion.span>
      </motion.h1>

      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="flex justify-center lg:justify-start p-4">
            <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.2}} className="text-gray-500 leading-relaxed">{ABOUT_TEXT}</motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutComponent;
