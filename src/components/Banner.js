import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
 import HeadderImg from "../assets/Banner.svg"

export const Banner = () =>{

    const [loopNum, setLoopNum ] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Web Developer", "Web Designer", "UX/UI Designer"]
    const [text, setText] = useState("")
    const [delta, setDelta] = useState(200 - Math.random() *100)
    const period= 2000

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
                        <h1>{`Olá, eu sou Front-End e `}<span className="wrap">{text}</span></h1>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived </p>
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