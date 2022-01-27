import React from 'react';
import { Navbar } from './components';
import { Blog, Footer, Header, Posibility, WhatGpt3 } from './containers';
import './App.css';

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <div>
                <WhatGpt3 />
                <Posibility />
                <Blog />
                <Footer />
            </div>
        </div>
    )
}

export default App