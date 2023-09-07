import React from 'react'
import './Footer.css';


function Footer(props) {
    return (
        <div className="App-footer">
            <p>{props.text}</p>
        </div>
    )
}

export default Footer
