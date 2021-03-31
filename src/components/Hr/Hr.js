import React from 'react'
import './hr.css'

export default function Hr({className}) {
    return (
        <div>
            <hr id="hr"/>
            <i className={`fas fa-star fa-lg ${className}`}></i>
        </div>
    )
}
