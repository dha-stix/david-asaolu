import { BsGithub } from "react-icons/bs"
import Link from "next/link"
import { BiLinkExternal } from "react-icons/bi"
import { Portfolio } from "@/constants"


export default function Port({data}: any) {
    return (
        <div className="w-full flex items-center md:flex-row flex-col justify-center md:space-x-4 mb-3">
            {data.map((d: Portfolio) => (
                <div className="border-[1px] bg-gray-800 border-gray-500 min-h-[250px] md:w-1/3 w-full md:mb-0 mb-4 rounded p-6" key={d.id}>
                    <div className="flex items-center justify-between w-full">
                         <h3 className="text-green-50 text-xl mb-2">{d.name}</h3>
                        <div className="flex items-center space-x-3">
                            <Link href={d.source_code} target="_blank">
                                <BsGithub size={20} className=" text-green-400" />
                                
                            </Link>
                            <Link href={d.demo_link} target="_blank">
                                <BiLinkExternal size={20} className=" text-green-400" />
                            </Link>
                        </div>
                    </div>
                   
                    <p className="text-white opacity-60 mb-4">{d.description}</p>
                    <div className="flex items-center space-x-2 text-green-600 text-sm">
                        {d.stack.map((item: string) => (
                             <button className="border-[1px] p-2 rounded-md border-gray-600" key={item}>{item}</button>
                        ))}
                      
                    </div>
                </div>
            ))}
            
            </div>
    )
}