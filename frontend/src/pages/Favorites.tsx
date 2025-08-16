import React from "react"
import CustomButton from '../components/CustomButton'
import { useNavigate } from "react-router-dom"
import '../components/home.css'


function Favorites() {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/')
    }
    return (
        <>
            <div className="navbar">
                <CustomButton title="Home" onPress={navigateHome} />
                <CustomButton title="Favorites" />
            </div>
            <div className="no-favorites">
                <h2>No favorites movie yet.</h2>
                <p>Start adding to your library now.</p>
            </div>
        </>

    )
}

export default Favorites