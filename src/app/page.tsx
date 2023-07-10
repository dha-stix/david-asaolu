"use client"
import Header from "@/components/Header"
import BlogSection from "@/components/BlogSection"
import Nav from "@/components/Nav"
import Portfolio from "@/components/PortfolioSection"
import Contact from "@/components/Contact"

export default function Home() {
  
  return (
    <main>
      <Nav/>
      <Header />
      <BlogSection />
      <Portfolio />
      <Contact/>
    </main>
  )
}
