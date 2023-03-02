import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
 import HeadderImg from "../assets/Banner.svg"

export const Banner = () =>{

    const [loopNum, setLoopNum ] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["<Front-End/>", "<Web Developer/>"]
    const [text, setText] = useState("")
    const [delta, setDelta] = useState(200 - Math.random() *100)
    const period= 2200

    useEffect(() =>{
        let ticker = setInterval(() =>{
            tick()        
        }, delta)

        return () =>{ clearInterval(ticker)}
    }, [text])

    const tick = () =>{
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
   
        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2.2)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === ""){
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }


    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> Welcome to my Portfolio</span>
                        <h1>{`Olá, eu sou o Lucas. `}<br></br><span className="wrap">{text}</span></h1>
                        <p> Desenvolvimento de Web Sites com HTML5, CSS3, JavaScript, ReactJS, Bootstrap, Wordpress e Elementor. Projetos com responsividade e otimização. Conhecimento em ferramentas de edição de imagens e de prototipagem como Photoshop, Illustrator, Figma e AdobeXD. </p>
                        <button onClick={() => console.log("connect")}>Let`s Connect <ArrowRightCircle size={25} /></button>
                    </Col> 
                    <Col xs={12} md={6} xl={5}>
                        <img src={HeadderImg} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}