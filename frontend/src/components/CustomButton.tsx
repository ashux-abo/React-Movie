import React from "react"
import styles from './custom-btn.module.css'

type ButtonProps = {
    title: string;
    onPress?:() => void;
}


const Button = ({title, onPress}: ButtonProps) =>{
    return(
        <div className={styles.container}>
            <button 
            className={styles.button}
            type="button" 
            onClick={onPress}>{title}</button>
        </div>
    )
}

export default Button
