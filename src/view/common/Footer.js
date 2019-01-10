import React from 'react';
import './Footer.css'

const Footer = () => {
    return (

        <footer className="footer-page">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Weather-Forecast
                </div>
            </div>
        </footer>
    )
}

export { Footer }