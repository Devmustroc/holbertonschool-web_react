import React from 'react'
import { getFooterCopy, getFullYear } from '../utils/utils';
import './Footer.css';


function Footer(props) {
    const copyright = `${getFullYear()} - ${getFooterCopy(true)}`
    console.log(copyright);
    return (
        <div className="App-footer">
            <p>{copyright}</p>
        </div>
    )
}

export default Footer
