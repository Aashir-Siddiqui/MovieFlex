import React from 'react'

export const GetMoviesData = async () => {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`)
        const data = response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export default GetMoviesData