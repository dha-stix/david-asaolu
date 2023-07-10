import { MdVerified } from "react-icons/md"
import { Link as ScrollLink} from "react-scroll";
import Link from "next/link";

export default function Nav() {
    return (
         <nav className="h-[10vh] w-full flex items-center md:px-10 px-6 justify-between sticky z-10 top-0 bg-gray-900">
                <div className="flex items-center space-x-[1px]">
                    <p className=" text-xl text-green-400">David</p>
                    <MdVerified className="text-blue-400 text-2xl"/>
                </div>
                <div className="flex items-center space-x-6 text-gray-400">
                    <ScrollLink to="blog" className="hover:text-white md:block hidden cursor-pointer" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>Blog</ScrollLink>
                    <ScrollLink to="portfolio"  className="hover:text-white md:block hidden cursor-pointer" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>Portfolio</ScrollLink>
                    <ScrollLink to="contact"  className="hover:text-white md:block hidden cursor-pointer" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>Contact</ScrollLink>
                    <Link href="https://drive.google.com/file/d/1w0DzCh97VukgHjEC1CLbJC_fOActceqb/view?usp=sharing" target="_blank" className="px-4 py-2 bg-green-600 text-green-50 rounded">RESUME</Link>
                </div>
            </nav>
    )
}