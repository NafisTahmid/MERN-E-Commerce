import React from 'react';

const Footer = () => {
    return (
        <section className='pb-3'>
            <p className='text-center'>&copy; <a className='text-decoration-none text-muted' href="https://nafistahmid.github.io/my_portfolio/?fbclid=IwAR2GkRXWpNBNuH8v5HAqaaH40CNBkg955QDrSHEYltJbTDyjJ4nU0h6t9WA" target="_blank" rel="noreferrer">Nafis Tahmid</a> | {(new Date()).getFullYear()}</p>
        </section>
    );
};

export default Footer;