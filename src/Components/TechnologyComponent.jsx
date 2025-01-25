/* eslint-disable no-unused-vars */
import React from 'react'
import { RiReactjsLine, RiHtml5Line, RiJavascriptLine } from 'react-icons/ri'
import { RiTailwindCssLine } from 'react-icons/ri'
import { SiMysql, SiOracle, SiSpringboot, SiSpringsecurity, SiApachemaven } from "react-icons/si";
import { FaCss3Alt, FaAws, FaGit, FaJava } from "react-icons/fa";
import { IoLogoDocker } from "react-icons/io5"; // Docker Icon
import { motion } from "framer-motion"

const TechnologyComponent = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
        <motion.h1 className="my-20 text-center text-4xl text-gray-700">
            Technologies
        </motion.h1>

        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">
            <motion.div initial={{y:-10}} animate={{y:[10,-10]}} transition={{duration:1,ease:"linear",repeat:Infinity,repeatType:"reverse"}} className="rounded-2xlp-4">
                <RiHtml5Line className="text-7xl text-orange-600"/>
            </motion.div>

            <motion.div initial={{y:-10}} animate={{y:[10,-10]}} transition={{duration:1.2,ease:"linear",repeat:Infinity,repeatType:"reverse"}}>
                <FaCss3Alt className="text-7xl text-blue-400"/>
            </motion.div>

            <motion.div initial={{y:-10}} animate={{y:[10,-10]}} transition={{duration:1.3,ease:"linear",repeat:Infinity,repeatType:"reverse"}} className="rounded-2xlp-4">
                <RiJavascriptLine className="text-7xl text-yellow-400"/>
            </motion.div>

            <motion.div initial={{y:-10}} animate={{y:[10,-10]}} transition={{duration:1.5,ease:"linear",repeat:Infinity,repeatType:"reverse"}}  className="rounded-2xlp-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>

            <motion.div initial={{y:-10}} animate={{y:[10,-10]}} transition={{duration:1.7,ease:"linear",repeat:Infinity,repeatType:"reverse"}} className="rounded-2xlp-4">
                <RiTailwindCssLine className="text-7xl text-cyan-500"/>
            </motion.div>

            {/* Java, Spring Boot, AWS, Docker Icons */}
            <motion.div initial={{y:-10}} animate={{y:[10,-10]}} transition={{duration:1.9,ease:"linear",repeat:Infinity,repeatType:"reverse"}} className="rounded-2xlp-4">
                <FaJava className="text-7xl text-black"/>
            </motion.div>

            <motion.div initial={{y:-10}} animate={{y:[10,-10]}} transition={{duration:2.1,ease:"linear",repeat:Infinity,repeatType:"reverse"}} className="rounded-2xlp-4">
                <FaAws className="text-7xl text-orange-500"/>
            </motion.div>

            <motion.div initial={{y:-10}} animate={{y:[10,-10]}} transition={{duration:2.2,ease:"linear",repeat:Infinity,repeatType:"reverse"}} className="rounded-2xlp-4">
                <IoLogoDocker className="text-7xl text-blue-500"/>
            </motion.div>

            {/* MySQL, Oracle DB, Maven, Jenkins, Git Icons */}
            <motion.div initial={{y:-10}} animate={{y:[10,-10]}} transition={{duration:2.3,ease:"linear",repeat:Infinity,repeatType:"reverse"}} className="rounded-2xlp-4">
                <SiMysql className="text-7xl text-blue-600"/>
            </motion.div>

            <motion.div initial={{y:-10}} animate={{y:[10,-10]}} transition={{duration:2.4,ease:"linear",repeat:Infinity,repeatType:"reverse"}} className="rounded-2xlp-4">
                <SiOracle className="text-7xl text-red-600"/>
            </motion.div>

            <motion.div initial={{y:-10}} animate={{y:[10,-10]}} transition={{duration:2.5,ease:"linear",repeat:Infinity,repeatType:"reverse"}} className="rounded-2xlp-4">
                <SiSpringboot className="text-7xl text-green-600"/>
            </motion.div>

            <motion.div initial={{y:-10}} animate={{y:[10,-10]}} transition={{duration:2.6,ease:"linear",repeat:Infinity,repeatType:"reverse"}} className="rounded-2xlp-4">
                <SiSpringsecurity className="text-7xl text-gray-600"/>
            </motion.div>

            <motion.div initial={{y:-10}} animate={{y:[10,-10]}} transition={{duration:2.7,ease:"linear",repeat:Infinity,repeatType:"reverse"}} className="rounded-2xlp-4">
                <SiApachemaven className="text-7xl text-orange-500"/>
            </motion.div>

            <motion.div initial={{y:-10}} animate={{y:[10,-10]}} transition={{duration:2.8,ease:"linear",repeat:Infinity,repeatType:"reverse"}} className="rounded-2xlp-4">
                <FaGit className="text-7xl text-black"/>
            </motion.div>

        </motion.div>

    </div>
  )
}

export default TechnologyComponent;
