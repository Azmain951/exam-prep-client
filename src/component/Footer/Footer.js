import React from 'react';
import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className='bottom text-light p-4'>
                <p className="text-center">For any query contact: azmainafridi@gmail.com</p>
                <h5 className="text-center">&copy;Copyright {year}, All right reserved.</h5>
            </div>
        </footer>
    );
};

export default Footer;