import React from 'react'
import profile from '../../Images/profile.png';
import './styles.css';

export default function Container() {
    return (
        <header className="text-center text-white masthead mt-5 pt-5">
            <div className="container">
                <img className="img-fluid d-block mx-auto mb-5 pt-5" src={profile}/>
                <h1>John Doe</h1>
                <hr className="star-light"/>
                <h2 className="font-weight-light mb-0 pb-5">Web Developer - Graphic Artist - User Experience Designer</h2>
            </div>
        </header>
    )
}
