import React from 'react'
import '../Navigation/Navigation.css'

function Navigation() {
    return (
        <div className="navigation-container">
            <div className="navigation-menu">
                <div className="navigation-name">Johan Stahre <span>portfolio</span></div>
                <div className="navigation-menu-item">Home</div>
                <div className="navigation-menu-item">About</div>
                <div className="navigation-menu-item">Portfoli</div>
                <div className="navigation-menu-item">Contact</div>
            </div>
        </div>
    )
}

export default Navigation
