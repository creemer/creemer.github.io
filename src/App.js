import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => {
    return (
        <React.Fragment>
            <NavBar />

            <div class="bgimg-1 w3-display-container w3-opacity-min" id="home">
                <div class="w3-display-middle" style={{ whiteSpace: 'nowrap'}}>
                    <span class="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">MY <span class="w3-hide-small">WEBSITE</span> LOGO</span>
                </div>
            </div>

            <About />


            <div class="bgimg-2 w3-display-container w3-opacity-min">
                <div class="w3-display-middle">
                    <span class="w3-xxlarge w3-text-white w3-wide">PORTFOLIO</span>
                </div>
            </div>

            <Portfolio />

            <div class="bgimg-3 w3-display-container w3-opacity-min">
                <div class="w3-display-middle">
                    <span class="w3-xxlarge w3-text-white w3-wide">CONTACT</span>
                </div>
            </div>

            <Contact />

            <Footer />
        </React.Fragment>
    );
};

export default App;
