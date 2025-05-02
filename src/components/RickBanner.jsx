import { Col, Container, Row } from "react-bootstrap";
import {ArrowRightCircle, TypeH2} from "react-bootstrap-icons"
import logo from '/images/logo.png';
// import pepeHigh from '/images/pepeHigh.png';
// import HomeExperience from "./HomeExperience";
// import LogoShowcase from "./LogoShowcase";
import { useNavigate } from "react-router-dom";
import { RickExperience } from "./RickExperience";
// import AnimatedCounter from "./AnimatedCounter";

 const RickBanner=()=>{
    const navigate = useNavigate();
    return (
        <section className="bannerrick" id='about'> 
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={6}>
                {/* <span className="tagline">Bigger  Better Stronger</span> */}
                <h1>{'Hosico Cat'}<span className="wrap"></span></h1>
                <h1>{'History'}<span className="wrap"></span></h1>
                <p>Long ago, in the forgotten corners of the internet, a round and majestic feline named Hosico ruled over a kingdom of cozy pillows, snack bowls, and cardboard boxes. While others chased laser beams and got distracted by red dots, Hosico had a vision: a coin so cute, so fluffy, it would conquer the blockchain with sheer charm..
                </p>
                {/* <button className="pointer-events-auto" onClick={() => {navigate('/game')}} >Let's Play<ArrowRightCircle size={25}/></button> */}
                </Col>
                <Col xs={12} md={6} xl={6}>
                {/* <img src={logo} alt="Header img"/> */}

                <div>
                    <RickExperience/>
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
 export default RickBanner;