import { Col, Container, Row } from "react-bootstrap"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import cssMeter from "../assets/css-meter.svg"
import htmlMeter from "../assets/html-meter.svg"



export const Skills = () =>{

    const responsive = {
        superLargeDesktop:{
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet:{
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile:{
            breakpoint: {max: 464, min: 0},
            items: 1
        },
    }


    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Utilizo HTML5, CSS3, JavaScript, ReactJS, Bootstrap, Wordpress e Elementor. Conhecimento em ferramentas de edição de imagens e de prototipagem como Photoshop, Illustrator, Figma e AdobeXD.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={htmlMeter} alt="Image" />
                                    <h5>HTML5</h5>
                                </div>
                                <div className="item">
                                    <img src={cssMeter} alt="Image" />
                                    <h5>CSS3</h5>
                                </div>
                                <div className="item">
                                    <img src={cssMeter} alt="Image" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={cssMeter} alt="Image" />
                                    <h5>ReactJS</h5>
                                </div>
                                <div className="item">
                                    <img src={cssMeter} alt="Image" />
                                    <h5>Wordpress e Elementor</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}