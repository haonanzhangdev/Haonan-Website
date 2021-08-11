import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../components/Navbar';
import Footer from '../components/Footer';
import Homepage from '../pages/HomePage/Homepage';

const Main = ({
    children,
}) => {

    return (
        <>
        <Navigation />
        {children}
        <Footer />
        </>
    );
}

export default Main;
