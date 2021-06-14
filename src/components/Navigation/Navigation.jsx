import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../Features/activeView';
import '../Navigation/Navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons'


function Navigation() {
    // const [homeButtonIsClicked, setHomeButtonIsClicked] = useState(false);
    // const [aboutButtonIsClicked, setAboutButtonIsClicked] = useState(false);
    // const [portfolioButtonIsClicked, setPortfolioButtonIsClicked] = useState(false);
    // const [contactButtonIsClicked, setContactButtonIsClicked] = useState(false);
    const [menuClicked, setMenuClicked] = useState(false);

    const dispatch = useDispatch();

    function animationOnClick(dispatch, clickedButton) {
        setTimeout(() => {
            if (clickedButton === 'homeButton') {
                dispatch(actions.home());
                setMenuClicked(false)
            } else if (clickedButton === 'aboutButton') {
                dispatch(actions.about());
                setMenuClicked(false)
            } else if (clickedButton === 'portfolioButton') {
                dispatch(actions.portfolio());
                setMenuClicked(false)
            } else if (clickedButton === 'contactButton') {
                dispatch(actions.contact());
                setMenuClicked(false)
            }
        }, 250);
    }

    const menuActive = () => {
        if(menuClicked) {
            return (
                <div className="navigation-menu-faclose">
                    <FontAwesomeIcon icon={faWindowClose} size="2x"/>
                </div>
            )
        }else {
            return (
                <div className="navigation-menu-fabars">
                    <FontAwesomeIcon icon={faBars} size="2x"/>
                </div>
            )
        }
    }

    function handleClick () {
        setMenuClicked(!menuClicked)
    }

    return (
        <div className="navigation-container">
            <div className="navigation-name">Johan Stahre <span>portfolio</span></div>
            <div className="navigation-menu-icon" onClick={handleClick}>
                    {menuActive()}
                </div>
            <div className={menuClicked ? "navigation-menu-open" : "navigation-menu"}>
                <div className="navigation-menu-item" onClick={() => {animationOnClick(dispatch, 'homeButton')}}>Home</div>
                <div className="navigation-menu-item" onClick={() => {animationOnClick(dispatch, 'aboutButton')}}>About</div>
                <div className="navigation-menu-item" onClick={() => {animationOnClick(dispatch, 'portfolioButton')}}>Portfolio</div>
                <div className="navigation-menu-item" onClick={() => {animationOnClick(dispatch, 'contactButton')}}>Contact</div>
            </div>
        </div>
    )
}

export default Navigation
