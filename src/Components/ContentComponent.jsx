/* eslint-disable no-unused-vars */
import React from 'react'
import { HERO_CONTENT } from '../constants'
import photo from "../assets/photo.jpg"
import { motion } from "framer-motion"

const Content = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap ">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col mx-7 items-center lg:items-start">
                        <motion.h1 initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:0}} className="pb-5 text-6xl font-thin tracking-tight lg:mt-16
                        lg:text-8xl text-gray-700 my-16">Karan Vig</motion.h1>

                        <motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}}  className="px-1 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Front End Developer</motion.span>

                        <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} className="px-1 py-5 max-w-xl font-light tracking-tighter text-gray-500">{HERO_CONTENT}</motion.p>

                    </div>

                </div>

                <div className="w-full lg:w-1/2 lg:p-8 my-11">

                    <div className="flex justify-center">
                        <motion.img whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}}  className=" rounded-2xl h-96 w-max" src={photo} alt="Not Found" />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Content