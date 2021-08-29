import React from 'react'
import '../PortfolioItem/PortfolioItem.css'

function PortfolioItem(props) {
    return (
        <div className="item-container">
            <div className="item-name-container">
                <p className="item-category">{props.category}</p>
                <h3 className="item-name">{props.name}</h3>
                <p className="item-description">{props.description}</p>
                <button className="item-button">Read more</button>
            </div>
        </div>
    )
}

export default PortfolioItem
