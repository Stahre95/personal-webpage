import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../Features/activeView';
import '../Navigation/Navigation.css'

function Navigation() {
    const [homeButtonIsClicked, setHomeButtonIsClicked] = useState(false);
    const [aboutButtonIsClicked, setAboutButtonIsClicked] = useState(false);
    const [portfolioButtonIsClicked, setPortfolioButtonIsClicked] = useState(false);
    const [contactButtonIsClicked, setContactButtonIsClicked] = useState(false);

    const dispatch = useDispatch();

    function animationOnClick(dispatch, clickedButton) {
        setTimeout(() => {
            if (clickedButton === 'homeButton') {
                setHomeButtonIsClicked(false);
            }else if (clickedButton === 'aboutButton') {
                setAboutButtonIsClicked(false);
            }
            else if (clickedButton === 'portfolioButton') {
                setPortfolioButtonIsClicked(false);
            }
            else if (clickedButton === 'contactButton') {
                setContactButtonIsClicked(false);
            }
        }, 100);
        setTimeout(() => {
            if (clickedButton === 'homeButton') {
                dispatch(actions.home());
            } else if (clickedButton === 'aboutButton') {
                dispatch(actions.about());
            } else if (clickedButton === 'portfolioButton') {
                dispatch(actions.portfolio());
            } else if (clickedButton === 'contactButton') {
                dispatch(actions.contact());
            }
        }, 250);
    }

    return (
        <div className="navigation-container">
            <div className="navigation-menu">
                <div className="navigation-name">Johan Stahre <span>portfolio</span></div>
                <div className="navigation-menu-item" onClick={() => { setHomeButtonIsClicked(true); animationOnClick(dispatch, 'homeButton')}}>Home</div>
                <div className="navigation-menu-item" onClick={() => { setAboutButtonIsClicked(true); animationOnClick(dispatch, 'aboutButton')}}>About</div>
                <div className="navigation-menu-item" onClick={() => { setPortfolioButtonIsClicked(true); animationOnClick(dispatch, 'portfolioButton')}}>Portfoli</div>
                <div className="navigation-menu-item" onClick={() => { setContactButtonIsClicked(true); animationOnClick(dispatch, 'contactButton')}}>Contact</div>
            </div>
        </div>
    )
}

export default Navigation
