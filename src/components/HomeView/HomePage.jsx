import React from 'react'
import './HomePage.css'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../Features/activeView';

const HomePage = () => {
    const dispatch = useDispatch();

    return (
        <div className="home-container">
            <div className="home-text-container">
                <h1 className="text-1">Hello, my Name is...</h1>
                <h1 className="text-2">Johan Stahre</h1>
                <h1 className="text-3">and I'm a <span>Junior Developer</span></h1>
                <button className="home-button" onClick={() => dispatch(actions.about())}>About me</button>
            </div>
        </div>
    )
}

export default HomePage
