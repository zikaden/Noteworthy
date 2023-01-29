import React from 'react';
import Navbar from './Nav';
import Footer from './Footer';
import Note from './Note';

const Home = () => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Navbar />
            <div className="p-10">
                <Note />
            </div>
            <Footer />
        </div>
    )
}

export default Home