import React from 'react'
import '../PortfolioView/PortfolioPage.css'
import PortfolioItem from '../PortfolioItem/PortfolioItem'
import Test from '../../Images/WHS.PNG'
function PortfolioPage() {
    return (
        <div className="portfolio-title-container">
            <h1 className="portfolio-title">Johan Stahre Portfolio</h1>
            <div className="portfolio-container">
                {/*portfolio component*/}
                <PortfolioItem name="WHS" src={Test} description="School project app" category="Application"/>
                <PortfolioItem name="Test project" src={Test} description="School project app" category="Application"/>
                <PortfolioItem name="Personal website" src={Test} description="School project app" category="Website"/>
                <PortfolioItem name="Countdown App" src={Test} description="School project app" category="Application"/>

            </div>
        </div>
    )
}

export default PortfolioPage
