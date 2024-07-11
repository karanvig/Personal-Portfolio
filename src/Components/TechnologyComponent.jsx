/* eslint-disable no-unused-vars */
import React from 'react'
import { RiReactjsLine,RiHtml5Line,RiJavascriptLine } from 'react-icons/ri'
import { RiTailwindCssLine } from 'react-icons/ri'
import { SiJest } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
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

            <motion.div initial={{y:-10}} animate={{y:[10,-10]}} transition={{duration:1.6,ease:"linear",repeat:Infinity,repeatType:"reverse"}} className="rounded-2xlp-4">
                <SiJest className="text-7xl text-red-500"/>
            </motion.div>

            <motion.div initial={{y:-10}} animate={{y:[10,-10]}} transition={{duration:1.7,ease:"linear",repeat:Infinity,repeatType:"reverse"}} className="rounded-2xlp-4">
                <RiTailwindCssLine className="text-7xl text-cyan-500"/>
            </motion.div>

            <motion.div initial={{y:-10}} animate={{y:[10,-10]}} transition={{duration:1.8,ease:"linear",repeat:Infinity,repeatType:"reverse"}} className="rounded-2xlp-4">
                <SiRedux className="text-7xl text-purple-500"/>
            </motion.div>






        </motion.div>

    </div>
  )
}

export default TechnologyComponent