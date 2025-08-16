import React from 'react'
import '../components/navbar.css'
import toggle_light from '../assets/day.png'
import toggle_dark from '../assets/night.png'
import babi from '../assets/babi.jpg'
import search_light from '../assets/search-w.png'
import search_dark from '../assets/search-b.png'


type NavbarProps = {
    theme: string;
    setTheme: (query: string) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const Navbar = ({searchQuery, setSearchQuery, theme, setTheme }:NavbarProps) => {
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(searchQuery);
    }

    const toggleMode = () =>{
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }

    const handleSearchClick = () =>{
        alert(searchQuery);
    }
    return (
        <div className='navbar'>

            <img src={babi} alt="" className='logo' />
            <ul>
                <li>Home</li>
                <li>Favorites</li>
            </ul>

            <form onSubmit={handleSearch} className='search-form'>
                <input
                    type="text"
                    placeholder='Looking for something?...'
                    className='search-input'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <img src={theme == 'light' ? search_dark : search_light} alt="Search" className='toggle-icon' onClick={handleSearchClick}/>
            </form>

            <img src={toggle_dark} alt="" className='toggle-icon' onClick={()=>{toggleMode}}/>
        </div>
    )
}

export default Navbar
