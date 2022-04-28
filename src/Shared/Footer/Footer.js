import React from 'react';


const Footer = () => {
    const today = new Date () ;
    const year = today.getFullYear ()

    return (
        <footer className='text-center text-light mt-5 bg-dark p-5'>
            <p>copyright &copy; {year}</p>
        </footer>
    );
};

export default Footer;