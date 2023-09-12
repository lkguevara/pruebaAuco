import Link from 'next/link'

const page = () => {
  return (
    <div>
    <Link href='/'>
        <button class="bg-purple-800 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded m-4 md:absolute">
            Home
        </button>
    </Link>
    <h1 className='text-purple-400 font-bold my-10 text-center text-xl'>Mis Sueños y Proyecciones en Auco</h1>
    <p className='text-white'>Desde que comencé mi carrera como desarrolladora frontend, mi objetivo se ha enfocado en trabajar en una empresa innovadora y dinámica como Auco. Por ende, pienso que Auco es el lugar perfecto para crecer profesionalmente y lograr las metas propuestas. 
    </p>

    <h2 className='text-purple-400 font-bold my-10 text-center text-xl'>Metas a corto y mediano plazo</h2>
    <p className='text-white'>A corto plazo y con mis habilidades en desarrollo de software me permitirán hacer una contribución valiosa desde el principio a Auco, espero poder seguir con un aprendizaje continúo y dentro de ello incluye habilidades en Inglés, puesto que este es un objetivo. A largo plazo, espero poder asumir roles de liderazgo y ayudar a formar la dirección de la empresa. Estoy emocionada por las oportunidades que Auco ofrece y sobre todo ansiosa por ser parte del equipo. ¡Gracias por considerar mi aplicación!</p>

    <h2 className='text-purple-400 font-bold my-10 text-center text-xl'>¿Por qué Auco?</h2>
    <ul>
        <li className='text-white'>* Aprender y desarrollar mis habilidades técnicas y blandas.</li>
        <li className='text-white'>* Trabajar en equipo y aprender de mis compañeros.</li>
        <li className='text-white'>* Aportar con mis conocimientos y experiencias.</li>
        <li className='text-white'>* Ser parte de un equipo de trabajo que se preocupa por el bienestar de sus trabajadores.</li>
        <li className='text-white'>* Trabajar en un ambiente agradable.</li>
    </ul>
  </div>
  )
}

export default page