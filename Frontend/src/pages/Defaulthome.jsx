import React, { useEffect, useState } from 'react';
import './Defaulthome.css';
import slideimg04 from '../images/slideimg04.png';
import slideimg01 from '../images/slideimg01.png';
import slideimg02 from '../images/slideimg02.png';
import kandycity from '../images/kandycity.jpg';
import colombo from '../images/colombo.jpg';
import galle02 from '../images/galle02.jpg';
import icon2 from '../images/Education.png';
import icon1 from '../images/Environment.png';
import icon3 from '../images/Health.png';
import icon4 from '../images/Community.png';
import map  from '../images/map.jpeg';
import stepback from '../images/stepback.png';
import Footer from '../componets/Footer';
import NavBar from '../componets/Navigation';

function Defaulthome() {
    return (
        <div className="App">
            <NavBar/>
            <Main />
            <Footer />
        </div>
    );
}

function Main() {
    return (
        <main>
            <HeroSection />
            <LocationSelection />
            <InfoBoxes />
            <ExploreSteps />
        </main>
    );
}

function HeroSection() {
    const [slideIndex, setSlideIndex] = useState(0);
    const slides = [slideimg04, slideimg01, slideimg02, slideimg04];

    useEffect(() => {
        const showSlides = () => {
            setSlideIndex(prevIndex => (prevIndex + 1) % slides.length);
        };

        const slideInterval = setInterval(showSlides, 4000); // Set interval to 5 seconds (5000 milliseconds)

        return () => clearInterval(slideInterval);
    }, [slides.length]);

    return (
        <section className="hero">
            <div className="slideshow-container1">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`slide ${index === slideIndex ? 'active' : ''}`}
                    >
                        <img src={slide} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
                <div className="text-overlay">
                    <h1>Empowering Volunteers,<br /> Enriching Futures</h1>
                    <p>Connect with opportunities that match your passion in volunteering</p>
                </div>
            </div>
        </section>
    );
}


function LocationSelection() {
    const [location, setLocation] = useState('kandy');
    const [mapImage, setMapImage] = useState('kandy.jpg');

    const updateMapImage = (event) => {
        const selectedLocation = event.target.value;
        setLocation(selectedLocation);
        setMapImage(`${selectedLocation}.jpg`);
    };

    return (
        <section className="location-selection">
            <div className="map-container">
                <select id="location" onChange={updateMapImage} value={location}>
                    <option value="selectcity">Select Your Location</option>
                    <option value="kandy">Kandy</option>
                    <option value="colombo">Colombo</option>
                    <option value="galle">Galle</option>
                </select>
                <img id="mapImage" src={map} alt="Map" />
            </div>

            <div className="info-container">
                <h2>Select Your Location</h2>
                <div className="slideshow-container">
                    <div className="slideshow">
                        <img src={kandycity} alt="Slide 1" />
                        <img src={colombo} alt="Slide 2" />
                        <img src={galle02} alt="Slide 3" />
                        <img src={kandycity} alt="Slide 4" />
                    </div>
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



export default Defaulthome;