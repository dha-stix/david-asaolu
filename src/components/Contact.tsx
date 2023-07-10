"use client"
import { FaDev, FaLinkedin } from "react-icons/fa"
import {AiFillTwitterCircle, AiTwotoneCopy} from "react-icons/ai"
import { SiUpwork } from "react-icons/si"
import { PiGithubLogoFill } from "react-icons/pi"
import Link from "next/link"
import CopyToClipboard from "react-copy-to-clipboard";
import { useState } from "react"
import { BsFillCheckCircleFill } from "react-icons/bs"

export default function Contact() {
    const [copied, setCopied] = useState(false);
	const handleCopy = () => setCopied(true);
    return (
        <footer className="w-full  bg-gradient-to-t from-gray-800 to-gray-900 md:px-10 py-10 px-6 flex flex-col items-center justify-center" id="contact">
            <h2 className="text-4xl text-green-50 font-bold mb-6">Contact Me</h2>
           
            {copied ? (
                <div className="flex space-x-2 items-center">
                    <p className="text-gray-400">Email copied</p>
                    <BsFillCheckCircleFill className='text-2xl cursor-pointer text-green-500' />
                </div>
						
					) : (
                    <CopyToClipboard onCopy={handleCopy} text={"asaoludavid234@gmail.com"}>
                        <div className=" p-4 border-[1px] border-gray-500 rounded flex items-center space-x-2">
                             <p className="text-gray-500">Copy Email</p>
							<AiTwotoneCopy className='text-2xl cursor-pointer text-green-500' />
                        </div>
                        
						</CopyToClipboard>
					)}
             <div className="w-full flex items-center justify-center md:space-x-4 space-x-2 mt-8">
                 
                      <Link href="https://dev.to/arshadayvid" target="_blank">
                         <FaDev className="text-green-400 hover:text-gray-400 cursor-pointer text-4xl md:text-6xl"/>
                    </Link>
                    
                      <Link href="https://www.linkedin.com/in/david-asaolu234" target="_blank" >
                         <FaLinkedin className="text-green-400 hover:text-gray-400 cursor-pointer text-4xl md:text-6xl"/>
                    </Link>

                    <Link href="https://twitter.com/dayvid_JS" target="_blank" title="Twitter">
                        <AiFillTwitterCircle className="text-green-400 hover:text-gray-400 cursor-pointer text-4xl md:text-6xl" />
                    </Link>

                      <Link href="https://www.upwork.com/freelancers/~01a622f54d6127b42f" target="_blank" title="Upwork">
                         <SiUpwork className="text-green-400 hover:text-gray-400 cursor-pointer text-4xl md:text-6xl"/>
                    </Link>

                       <Link href="https://github.com/dha-stix" target="_blank">
                         <PiGithubLogoFill className="text-green-400 hover:text-gray-400 cursor-pointer text-4xl md:text-6xl"/>
                    </Link>
            
                  
                </div>
        </footer>
    )
}