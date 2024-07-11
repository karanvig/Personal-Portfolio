/* eslint-disable no-unused-vars */
import React from 'react'
import { CONTACT } from '../constants'
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1  className="my-10 text-center text-4xl text-gray-700">Get in Touch</h1>

      <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}}  className="text-center tracking-tighter text-gray-600">
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href={`mailto:${CONTACT.email}`} className=" underline">{CONTACT.email}</a>


      </motion.div>

    </div>
  )
}

export default Contact