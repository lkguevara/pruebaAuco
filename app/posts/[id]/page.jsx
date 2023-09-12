import Link from 'next/link'
async function getComments(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    const data = await response.json();
    return data;
}

const Page = async ({params}) => {
    const comments = await getComments(params.id);
    
    return (
        <div>
            <Link href='/'>
                <button class="bg-purple-800 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded m-4 md:absolute">
                    Home
                </button>
            </Link>
            <h1 className='text-white font-bold my-10 text-center text-xl'>Comments Post {params.id}</h1>
            <ul className='sm:grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 text-justify mx-10'>
                {comments.map(comment => (
                    <li key={comment.id} className='bg-white mb-2 p-4 h-80 rounded-md text-gray-600'>
                        <h3 className='font-bold text-purple-900 mb-3'>{comment.name}.</h3>
                        <p className='md:mb-3'>{comment.body}</p>
                        <p className='text-purple-800 font-semibold'>{comment.email}</p>
                    </li>
                ))}
            </ul>



        </div>
    )
}

export default Page


