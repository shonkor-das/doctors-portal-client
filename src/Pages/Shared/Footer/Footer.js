import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer
        style = {{
            background: `url(${footer})`,
            backgroundPosition: 'center',
        }}

        className="pb-8 mt-16 px-24 font-Open Sans lg:mt-32">
            <div className='footer'>
                <div className='mr-48'>
                    <span className="footer-title text-lg font-bold">Services</span>
                    <Link to="/" className="link link-hover text-base">Emergency Checkup</Link>
                    <Link to="/" className="link link-hover text-base">Monthly Checkup</Link>
                    <Link to="/" className="link link-hover text-base">Weekly Checkup</Link>
                    <Link to="/" className="link link-hover text-base">Deep Checkup</Link>
                </div>
                <div className='mr-48'>
                    <span className="footer-title text-lg font-bold">ORAL HEALTH</span>
                    <Link to="/" className="link link-hover text-base">Fluoride Treatment</Link>
                    <Link to="/" className="link link-hover text-base">Cavity Filling</Link>
                    <Link to="/" className="link link-hover text-base">Teath Whitening</Link>
                </div>
                <div>
                    <span className="footer-title text-lg font-bold">OUR ADDRESS</span>
                    <Link to="/" className="link link-hover text-base">New York - 101010 Hudson</Link>
                </div>
            </div>
            <div className='text-center lg:mt-28 md:mt-14 mt-8 text-lg font-Open Sans'>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;