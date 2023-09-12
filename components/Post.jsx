"use client"
import Link from "next/link"

const Post = ({posts, userIdToName}) => {
  return (
    <div>
        <h1 className='text-white font-bold my-10 text-center text-xl'>LIST POST</h1>
       
            <ul className='sm:grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 text-justify mx-10'>
                {posts.map(post => (
                <Link href={`/posts/${post.id}`} key={post.id}>
                    <li key={post.id} className='bg-white mb-2 p-4 h-80 rounded-md text-gray-600'>
                        <h3 className='font-bold text-purple-900 mb-3'>{post.id}. {post.title}.</h3>
                        <p className='md:mb-3'>{post.body}</p>
                        <p className='text-purple-800 font-semibold'>{userIdToName[post.userId]}</p>
                    </li>
                </Link>
                ))}
            </ul>
    </div>
  )
}

export default Post