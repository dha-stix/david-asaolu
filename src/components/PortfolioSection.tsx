import Port from "./PortfolioLine"
import { line1, line2 } from "@/constants"

export default function Portfolio() {
    return (
        <main className=" md:px-10 px-6 py-10 bg-gray-900 w-full" id="portfolio">
            <h2 className="text-4xl text-green-50 font-bold mb-[50px]">Recent Projects</h2>
            <Port data={line1} />
            <Port data={line2} />
            
        </main>
    )
}