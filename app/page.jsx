import { useFetch } from '../hooks/useFetch'
import Post from '@/components/Post'
import Link from 'next/link'

const Home = async () => {
    const posts = await useFetch('https://jsonplaceholder.typicode.com/posts');
    const users = await useFetch('https://jsonplaceholder.typicode.com/users');

    const userIdToName = {};
    users.forEach(user => {
        userIdToName[user.id] = user.name;
    });


    return (
        <>
            <Link href="/personal">
                <button class="bg-purple-800 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded m-4 md:absolute">
                    Personal blog
                </button>
            </Link>
            <Post posts={posts} userIdToName={userIdToName} />
        </>
    )
}

export default Home