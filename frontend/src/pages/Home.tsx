import MovieCard from "../components/MovieCard"
import { useState } from "react";
import '../components/home.css'
import CustomButton from '../components/CustomButton'
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: 'Demon Slayer', releaseDate: '2025-08-22', poster: './babi.jpg' },
        { id: 2, title: 'Minecraft', releaseDate: '2025-08-22', poster: './babi.jpg' },
        { id: 3, title: 'John Wick', releaseDate: '2025-08-22', poster: './babi.jpg' },
        { id: 4, title: 'Fantastic 4', releaseDate: '2025-08-22', poster: './babi.jpg' },
        { id: 5, title: 'Superman', releaseDate: '2025-08-22', poster: './babi.jpg' },
    ]

    const navigate = useNavigate();
    const navigateFavorites = () => {
        navigate('./favorites')
    }

    return (
        <>
            <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <h1>Browse for Movies</h1>

            <div className="home">
                <div className="movie-grid">
                    {movies.map((movie) => (
                        movie.title.toLowerCase().startsWith(searchQuery.toLowerCase().trim()) && <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home;