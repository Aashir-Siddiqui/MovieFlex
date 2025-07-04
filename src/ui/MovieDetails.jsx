import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaImdb } from "react-icons/fa";
import { FaMasksTheater } from "react-icons/fa6";

export default function MovieDetails() {
    const movieData = useLoaderData()

    const { Actors, Awards, BoxOffice, Country, Director, Genre, Language, Plot, Poster, Released, Runtime, Title, Type, Writer, imdbRating, imdbVotes, imdbID, Year } = movieData

    const actorsList = Actors.split(', ').map(actor => actor.trim())

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <span className="w-2 h-16 bg-yellow-500"></span>
                        <h1 className="text-2xl sm:text-4xl font-semibold text-black">
                            {Country}
                        </h1>
                    </div>
                    <h1 className="text-2xl sm:text-4xl font-bold text-yellow-500 tracking-tight">
                        {Title}
                    </h1>
                    <img
                        src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/500x600"}
                        alt={Title}
                        className="w-full max-w-md shadow-lg object-cover rounded-md"
                    />
                </div>

                <div className="flex flex-col gap-6 justify-center">
                    <div className="flex gap-4">
                        <h2 className="font-semibold text-lg text-yellow-500 w-28">Director:</h2>
                        <p className="text-black">{Director}</p>
                    </div>
                    <div className="flex gap-4">
                        <h2 className="font-semibold text-lg text-yellow-500 w-28">Writer:</h2>
                        <p className="text-black">{Writer}</p>
                    </div>
                    <div className="flex gap-4">
                        <h2 className="font-semibold text-lg text-yellow-500 w-28">Awards:</h2>
                        <p className="text-black">{Awards}</p>
                    </div>
                    <div className="flex gap-4">
                        <h2 className="font-semibold text-lg text-yellow-500 w-28">Released:</h2>
                        <p className="text-black">{Released}</p>
                    </div>
                    <div className="flex gap-4">
                        <h2 className="font-semibold text-lg text-yellow-500 w-28">Genre:</h2>
                        <p className="text-black">{Genre}</p>
                    </div>
                    <div className="flex gap-4">
                        <h2 className="font-semibold text-lg text-yellow-500 w-28">Language:</h2>
                        <p className="text-black">{Language}</p>
                    </div>
                    <div className="flex gap-4">
                        <h2 className="font-semibold text-lg text-yellow-500 w-28">Type:</h2>
                        <p className="text-black">{Type}</p>
                    </div>
                    <div className="flex gap-4">
                        <h2 className="font-semibold text-lg text-yellow-500 w-28">Runtime:</h2>
                        <p className="text-black">{Runtime}</p>
                    </div>
                    <div className="flex gap-4">
                        <h2 className="font-semibold text-lg text-yellow-500 w-28">Votes:</h2>
                        <p className="text-black">({imdbVotes})</p>
                    </div>
                    <div className="flex gap-4">
                        <h2 className="font-semibold text-lg text-yellow-500 w-28">BoxOffice:</h2>
                        <p className="text-black">({BoxOffice})</p>
                    </div>
                    <div className="flex gap-4">
                        <h2 className="font-semibold text-lg text-yellow-500 w-28">Rating:</h2>
                        <p className="text-black">{imdbRating}</p>
                    </div>
                    <div className="flex gap-4">
                        <h2 className="font-semibold text-lg text-yellow-500 w-28">Story:</h2>
                        <p className="text-black leading-relaxed">{Plot}</p>
                    </div>
                </div>
            </div>

            <div className="mt-10 mb-20">
                <a
                    href={`https://www.imdb.com/title/${imdbID}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-yellow-500 rounded-md text-white w-fit h-14 p-4 text-sm font-bold hover:bg-yellow-600 transition duration-300"
                >
                    <FaImdb className="text-4xl text-black" />
                    Watch {Title} ({Year}) on IMDb
                </a>
            </div>

            <div className="mt-12">
                <h1 className="text-3xl sm:text-5xl font-bold text-black mb-6">Cast</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                        <thead>
                            <tr className="bg-yellow-500 text-white">
                                <th className="py-3 px-6 text-left font-semibold">Actor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {actorsList.map((actor, index) => (
                                <tr
                                    key={index}
                                    className={index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}
                                >
                                    <td className="py-3 px-6 text-black flex items-center gap-2">
                                        <FaMasksTheater className="text-[28px]" />
                                        {actor}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}