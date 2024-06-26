import Link from 'next/link'
import React from 'react'
import {FaInstagram, FaLinkedin} from "react-icons/fa"
import { FaGithub } from 'react-icons/fa'


export default function Footer() {
  return (
    <div className="mt-auto py-5 bg-black w-full text-white text-center">
       <h2 className='my-5 text-xl'>Social Handles</h2>
    <div className="flex justify-center space-x-6 mb-8">
      {/* Social Links */}
       
        <Link href={"https://www.instagram.com/cicada_._._3301/?hl=en"} target="_blank">
          <FaInstagram size={40}/>
        </Link>
        <Link href={"https://github.com/Samuel-for-github"} target="_blank">
          <FaGithub size={40}/>
        </Link>
        <Link href={"https://www.linkedin.com/in/samuel-fernandes-42466b280/"} target="_blank">
          <FaLinkedin size={40}/>
        </Link>
     
      {/* Add more social links/icons as needed */}
    </div>
   
   
  </div>
  
  )
}
