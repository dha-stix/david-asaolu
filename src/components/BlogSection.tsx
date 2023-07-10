"use client"
import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Blog() {
    const [posts, setPosts] = useState([])

  const getPosts = useCallback(() => {
      async function fetchPosts() {
          fetch("https://dev.to/api/articles?username=arshadayvid")
              .then(res => res.json())
              .then(data => {
                  const slice = data.slice(0, 6)
                  setPosts(slice)
              })
              .catch(err => console.error(err))
      }
      fetchPosts()
  }, [])
    
    useEffect(() => {
        getPosts()
    }, [getPosts])

    return (
        <main className=" md:px-10 px-6 py-10 w-full bg-gradient-to-b from-gray-800 to-gray-900" id="blog">
            <h2 className="text-4xl text-green-50 font-bold mb-[50px]">Latest Posts</h2>
            <div className="w-full flex flex-wrap items-center justify-center">
                {posts.map((post: any) => (
                    <div className="bg-gray-800 md:w-[350px] w-full min-h-[300px] shadow rounded m-3" key={post.id}>
                        <Image src={post.cover_image} alt={post.slug} width={300} height={300} className="w-full rounded mb-4" />
                        <div className="w-full p-4">
                            <p className="text-green-50 text-lg mb-3">{post.title}</p>
                            <p className="text-gray-300 text-sm opacity-70 mb-2">{post.description}</p>
                             <p className="text-green-300 text-sm mb-2">Published: {post.readable_publish_date}</p>
                            <Link href={post.url} target="_blank" className="px-4 py-2 mt-6 block w-[100px] bg-gradient-to-b from-pink-500 to-gray-600 text-green-50 text-center shadow rounded-md"> READ</Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full flex items-center justify-center mt-8">
                <Link href="https://dev.to/arshadayvid" target="_blank" className="bg-green-500 text-white font-bold py-3 px-6 rounded-md">READ MORE</Link>
            </div>
        </main>
    )
}