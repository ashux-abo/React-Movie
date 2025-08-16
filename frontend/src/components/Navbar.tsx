import React from 'react'
import '../components/navbar.css'

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

            <img src="" alt="" className='logo' />
            <h1>MovieLens </h1>
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

            <img src="" alt="" className='toggle-icon'/>
        </div>
    )
}

export default Navbar
