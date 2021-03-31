import React from 'react'
import profile from '../../Images/profile.png';
import Hr from '../Hr/Hr'
import './styles.css';

export default function Container() {
    return (
        <header className="text-white masthead mt-5 pt-5" id="page-top">
            <div className="container">
                <img className="img-fluid d-block mx-auto mb-5 pt-5" src={profile} />
                <Hr className="about"/>
                <div className="text-center">
                    <h1>Héctor Félix</h1>
                    <h2 className="font-weight-light mb-0 pb-5">Web Developer - Graphic Artist - User Experience Designer</h2>
                </div>
            </div>
        </header>
    )
}
