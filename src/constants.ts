export const line1 = [
    {
        id: "1",
        name: "InStock",
        description: "A sales management application that records sales and keep tracks of products based on their categories.",
        stack: ["Typescript", "Next.js 13", "Firebase"],
        demo_link: "https://instock-two.vercel.app",
       source_code: "https://github.com/dha-stix/instock-app"
    }, 
      {
        id: "2",
        name: "EventTiz",
        description: "An event ticketing application that enables users to create an account, create events, share invite links with friends, and enable users manage events.",
          stack: ["Next.js", "Tailwind CSS", "Firebase", "EmailJS"],
         source_code: "https://github.com/dha-stix/eventtiz",
        demo_link: "https://eventtiz.vercel.app/"
    }, 
        {
        id: "3",
        name: "FirmSupport",
        description: "A customer support management system that enables customers' to create support tickets, chat with company's staffs, and resolve conflicts.",
            stack: ["Next.js", "Appwrite", "Novu", "EmailJS"],
           source_code: "https://github.com/dha-stix/firm-support",
        demo_link: "https://firm-support.vercel.app/"
    }, 
    
]

export const line2 = [
    {
        id: "4",
        name: "Netflix Clone",
        description: "A movie application - Netflix UI clone.",
        stack: ["Typescript", "Next.js 13", "TMDB API"],
        demo_link: "https://netflix-sepia-one.vercel.app",
       source_code: "https://github.com/dha-stix/netflix"
    }, 
      {
        id: "5",
        name: "TintTastic",
        description: "A colour tints and shades generator with React & Values.js API.",
          stack: ["React.js", "Tailwind CSS", "Values.js"],
         source_code: "https://github.com/dha-stix/tints-shade-generator",
        demo_link: "https://tints-shade-generator.vercel.app/"
    }, 
        {
        id: "6",
        name: "Countries app",
        description: "A Frontendmentor.io challenge that uses a countries API to fetch various data related to all the countries in the world. It has a search and filter functionalities.",
            stack: ["React.js", "Redux", "API", "Tailwind CSS"],
           source_code: "https://github.com/dha-stix/countries-app",
        demo_link: "https://countries-app-one.vercel.app/"
    }, 
    
]


export interface Portfolio {
    id: string;
    name: string;
    description: string;
    stack: [string];
    source_code: string;
    demo_link: string
   
}