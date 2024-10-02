import React from 'react';
import './organizationhome.css';
import plus from '../images/plus.png';
import icon2 from '../images/Education.png';
import icon1 from '../images/Environment.png';
import icon3 from '../images/Health.png';
import icon4 from '../images/Community.png';
import stepback from '../images/stepback.png';
import LoginNavbar from '../componets/LoginNavbar';
import Footer from '../componets/Footer';


function Organizationhome() {
    return (
        <div className="App">
           <LoginNavbar/>
            <Main />
            <Footer/>
           
            
        </div>
    );
}

function Main() {
    return (
        <main>
            <HeroSection />
            <InfoBoxes />
            <ExploreSteps />
        </main>
    );
}

function HeroSection() {
    return (
        <section className="hero-section">
             <div className="background-image">
                <img src={stepback} alt="background2" />
            </div>
            <div className="card-container">
                <div className="card">
                    <h2>Add a Project</h2>
                    <img src={plus} alt="Add Project" />
                </div>
            </div>
        </section>
    );
}

function InfoBoxes() {
    return (
        <section className="info-boxes">
            <h2 className="subtitle">Volunteer Opportunity</h2>
            <h1>We Cover Four Key Areas</h1>
            <div className="info-box">
                <img src={icon2} alt="Education" />
                <h3>Education</h3>
                <p>welcome to our education volunteer program! join us in empowering students and shaping the future of learning.</p>
            </div>
            <div className="info-box">
                <img src={icon1} alt="Environment" />
                <h3>Environment</h3>
                <p>join our environmental volunteer team! together, we'll make a difference in protecting and preserving our planet.</p>
            </div>
            <div className="info-box">
                <img src={icon3} alt="Care" />
                <h3>Care</h3>
                <p>join our environmental volunteer team! together, we'll make a difference in protecting and preserving our planet.</p>
            </div>
            <div className="info-box">
                <img src={icon4} alt="Community" />
                <h3>Community</h3>
                <p>join our environmental volunteer team! together, we'll make a difference in protecting and preserving our planet.</p>
            </div>
        </section>
    );
}

function ExploreSteps() {
    return (
        <section className="explore-steps">
            <div className="background-image">
                <img src={stepback} alt="background2" />
            </div>
            <div className="overlay">
                <h1>How to Explore Our Website</h1>
                <div className="steps">
                    <div className="step">
                        <div className="number">01</div>
                        <div className="text">Fill out the registration from and verify your emails</div>
                    </div>
                    <div className="step">
                        <div className="number">02</div>
                        <div className="text">Log in, find opportunities, and select one</div>
                    </div>
                    <div className="step">
                        <div className="number">03</div>
                        <div className="text">Apply for the chosen opportunity and submit forms</div>
                    </div>
                    <div className="step">
                        <div className="number">04</div>
                        <div className="text">Make payment if required and save the receipt</div>
                    </div>
                    <div className="step">
                        <div className="number">05</div>
                        <div className="text">Submit a review</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default  Organizationhome;
