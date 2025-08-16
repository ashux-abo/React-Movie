import React from 'react'
import '../components/navbar.css'
import toggle_light from '../assets/day.png'
import toggle_dark from '../assets/night.png'
import babi from '../assets/babi.jpg'


type NavbarProps = {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const Navbar = ({searchQuery, setSearchQuery }:NavbarProps) => {
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault
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
                <button type='submit' className='search-btn'>Search</button>
            </form>

            <img src={toggle_dark} alt="" className='toggle-icon'/>
        </div>
    )
}

export default Navbar
