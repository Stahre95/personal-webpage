import React from 'react'
import './HomePage.css'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../Features/activeView';

const HomePage = () => {
    const dispatch = useDispatch();

    return (
        <div className="overlay">
        <div className="home-container">
            <div className="home-text-container">
                <h1 className="text-1">Hello, I am Johan Stahre</h1>
                <h1 className="text-2">Application Developper</h1>
                <h1 className="text-3">Based in Sweden</h1>
                <p className="buttons"><span className="button-about-me" onClick={() => dispatch(actions.about())}>About me</span> / <span className="button-portfolio" onClick={() => dispatch(actions.portfolio())}>Portfolio</span></p>
                {/*<button className="home-button" onClick={() => dispatch(actions.about())}>About me</button>
                <button className="home-button" onClick={() => dispatch(actions.about())}>About me</button>*/}
            </div>
            </div>
           
        </div>
    )
}

export default HomePage
