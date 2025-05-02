import { Col, Container, Row } from "react-bootstrap";
import {ArrowRightCircle, TypeH2} from "react-bootstrap-icons"
import logo from '/images/logo.png';
// import pepeHigh from '/images/pepeHigh.png';
// import HomeExperience from "./HomeExperience";
// import LogoShowcase from "./LogoShowcase";
import { useNavigate } from "react-router-dom";
import { FishExperience } from "./FishExperience";
// import AnimatedCounter from "./AnimatedCounter";

 const Banner=()=>{
    const navigate = useNavigate();
    return (
        <section className="banner" id="home"> 
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={6}>
                <span className="tagline">Paws. Claws. Moon.!</span>
                <h1>{'Purrito The Cute Cat'}<span className="wrap">!</span></h1>
                <p>The chunkiest, fluffiest, and most majestic meme coin to ever waddle onto the blockchain. Powered by snacks, naps, and unstoppable laziness, Purrito isn't here just to run — he's here to roll to the moon.

Join the fluff revolution where slow and steady definitely wins the race (eventually). Buy, hold, nap, and let the chunky paws of destiny guide your crypto dreams. Remember: In Purrito we trust — because who can say no to that cute face?.</p>
                <button className="pointer-events-auto " onClick={() => {navigate('/game')}} >
                    Let's Play
                    <ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={6}>
                {/* <img src={logo} alt="Header img"/> */}

                <div>
                    <FishExperience/>
                </div>

                {/* <figure>
                <div className="hero-3d-layout ">
                <HomeExperience/>
                </div>
                </figure> */}

                </Col>
            </Row>
        </Container>
        
      
        </section>
        
        
    )
 }
 export default Banner;