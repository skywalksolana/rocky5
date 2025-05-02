import { Col, Container, Row } from "react-bootstrap";
import {ArrowRightCircle, TypeH2} from "react-bootstrap-icons"
import logo from '/images/logo.png';
// import pepeHigh from '/images/pepeHigh.png';
// import HomeExperience from "./HomeExperience";
// import LogoShowcase from "./LogoShowcase";
import { useNavigate } from "react-router-dom";
import { RickExperience } from "./RickExperience";
// import AnimatedCounter from "./AnimatedCounter";

 const About=()=>{
    const navigate = useNavigate();
    return (
        <section className="bannerrick" id='#'> 
        <Container>
            <Row className="align-items-center">
                <Col xs={12} m1d={12} xl={12}>
                {/* <span className="tagline">Bigger  Better Stronger</span> */}
                <h1>{'About Purrito'}<span className="wrap"></span></h1>
                {/* <h2>{'About Fred the Fish Coin'}<span className="wrap">!</span></h2> */}
                <p>
                Fueled by tuna and a dream, Purrito clawed his way through the digital jungle. He assembled a team of elite cat coders—trained in the ancient arts of blockchain and napping simultaneously. With one mighty paw-swipe on a laptop (followed by a 6-hour nap), Purrito was born..
                Now, Purrito is no longer just a coin—it’s a movement. A fluffy rebellion. A paw-sitive force of financial chaos led by the internet’s chunkiest general.
So remember: In fluff we trust. In snacks we invest. And with Purrito, we moon.
                </p>
                {/* <button className="pointer-events-auto" onClick={() => {navigate('/game')}} >Let's Play<ArrowRightCircle size={25}/></button> */}
                </Col>
            </Row>
        </Container>
        
      
        </section>
        
        
    )
 }
 export default About;