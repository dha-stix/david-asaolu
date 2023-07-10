import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaDev, FaLinkedin} from "react-icons/fa"
import {AiFillTwitterCircle} from "react-icons/ai"
import { SiUpwork } from "react-icons/si"
import { PiGithubLogoFill } from "react-icons/pi"

export default function Header() {
    const path = usePathname()
    return (
        <header className="w-full min-h-[90vh] bg-gradient-to-t from-gray-800 to-gray-900">
           
            <section className="min-h-[90vh] md:px-10 px-6 py-10 flex flex-col w-full justify-center">
                <h3 className="text-gray-400 text-lg mb-2">
                    Hey, I&apos;m <span className="text-green-500">David</span>👋🏻
                </h3>
                <h2 className="md:text-8xl text-5xl font-semibold text-gray-300 mb-6">
                    Software Engineer & Technical Writer
                </h2>
                <p className="text-gray-400 md:text-2xl mb-2">
                    I create full stack applications with Next.js, TypeScript, React Native (Expo) and BaaS, such as <Link href="https://console.firebase.google.com/u/0/" target="_blank" className="text-yellow-600">Firebase</Link>, <Link href="https://appwrite.io/" target="_blank" className="text-red-600">Appwrite Cloud</Link>, and <Link href="https://supabase.com/" target="_blank" className="text-green-600">Supabase</Link>. 
                </p>
                <p className="text-gray-400 md:text-2xl">
                    I enjoy writing how-to guides for software products and open source projects.
                </p>


                <div className="w-full flex items-center md:space-x-4 space-x-2 mt-8">
                 
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
            </section>
        </header>
    )
}