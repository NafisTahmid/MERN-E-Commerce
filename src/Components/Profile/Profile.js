import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Navbar/Footer/Footer';


const Profile = () => {
    return (
        <section className='bg-brand bg-brand-container'>
            <Navbar/>
           
            <div className="container mt-5">
                <h1 className='fs-4'>Profile</h1>
            </div>

            <Footer/>
        </section>
    );
};

export default Profile;