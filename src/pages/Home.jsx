import React from 'react'
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Analytics from '../components/Analytics';
import Employees from '../components/Employees';
import Cards from '../components/Cards';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <Analytics />
            <Employees />
            <Cards />
            <Footer />
        </>
);
}

export default Home