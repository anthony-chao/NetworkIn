import React from "react"

const LoadingContainer = () => {

    return (
        <div className="loading-container">
            <span className="fa-linkedin"><img id="loading-logo" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" /></span>
            <div className="loading-container-line">
                <div className="loading-container-inner"></div>
            </div>
        </div>
    )
}

export default LoadingContainer;