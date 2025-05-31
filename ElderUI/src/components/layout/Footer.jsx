import React from 'react';
import './css/Footer.css';

function Footer() {
    return (
        <footer className="app-footer">
            <p>&copy; {new Date().getFullYear()} ElderUI. All rights reserved.</p>
        </footer>
    );
}

export default Footer;