// fetch para traer post de jsonplaceholder y mostrarlos en pantalla

export async function useFetch(url){
    const res = await fetch(url)
    const data = await res.json()
    return data
}