import React from "react"
import { FaLinkedin } from 'react-icons/fa'

const LoadingContainer = () => {

    return (
        <div class="loading-container">
            <span class="fa-linkedin">{FaLinkedin}</span>
            <div class="loading-container-line">
                <div class="loading-container-inner"></div>
            </div>
        </div>
    )
}

export default LoadingContainer;