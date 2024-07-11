/* eslint-disable no-unused-vars */
import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl text-gray-700">Projects</h1>

      <div>
        {PROJECTS.map((item, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center" >
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className="w-full lg:w-1/4">
              <img src={item.image} width={150} height={150} alt={item.title} className="mb-6 rounded" />
            </motion.div>

            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold text-gray-600">{item.title}</h6>
              <p className="mb-4 text-gray-500">{item.description}</p>
              <a href={item.hostedLink} target="_blank" rel="noopener noreferrer" className="mb-4 text-gray-700 hover:text-gray-900 ">{item.title}</a>

              <div className="mb-4 mt-4">
                {item.technologies.map((tech, index) => (
                  <span key={index} className="inline-block mr-2 mb-2 rounded bg-neutral-200 px-3 py-1 text-sm font-medium text-purple-800">
                    {tech}
                  </span>
                ))}
              </div>

            </motion.div>

          </div>
        ))}


      </div>

    </div>
  )
}

export default Projects