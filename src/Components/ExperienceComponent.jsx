/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from "framer-motion"
import { EXPERIENCES } from '../constants'
const ExperienceComponent = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl  text-gray-700">Experience</h1>

            <div>
                {EXPERIENCES.map((item, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-gray-500">{item.year}</p>
                        </motion.div>

                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.5 }} className="w-full max-w-xl lg:w-3/4">
                            <h3 className="mb-2 text-gray-600 font-semibold">
                                {item.role}-<span className="text-purple-800">
                                    {item.company}
                                </span>

                            </h3>
                            <ul className="list-disc list-inside text-gray-500">
                                {item.description.map((point, index) => (
                                    <li key={index} className="mb-1">{point}</li>
                                ))}
                            </ul>

                            {item.technologies.map((tech, index) => (
                                <span key={index} className="inline-block mr-2 mb-2 rounded bg-neutral-200 px-3 py-1 text-sm font-medium text-purple-800">
                                    {tech}
                                </span>
                            ))}


                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExperienceComponent