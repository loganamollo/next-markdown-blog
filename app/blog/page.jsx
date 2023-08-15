'use client'
import matter from "gray-matter"
import md from 'markdown-it'
import { post } from "@/data/blog"



export default function Page(){
    const { data: frontmatter, content } = matter(post)
    console.log(frontmatter)
    return (
        <main>
            <h1>Blog Page</h1>
            <div className="prose mx-10 my-8 text-justify" dangerouslySetInnerHTML={{__html: md().render(content) }} />
        </main>
    )
}