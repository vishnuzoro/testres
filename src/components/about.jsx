import { Container, Row, Col } from "react-bootstrap";
import '../css/about.css'
import Icon from "./icons";
import Head from "./head";
import { LiaHackerrank } from "react-icons/lia";
function About(){
    return (
        <>
        
        <Container fluid style={{paddingBottom:"10px"}}>
        <h4 class="firsthead"><LiaHackerrank size={50} style={{fill:' rgb(0, 255, 0)'}}/>ack</h4>
            <Row>
                <Col lg={1}>
                    <Icon/>
                </Col>
                <Col lg={11}>
                <h2 class="portfolio">About</h2>
        <hr class="one" id="one" />
            <Row>
                <Col lg={5}>
                <p class="first-col-para mt25">Who am i ?</p>
                </Col>
                <Col lg={6}>
                <p class="second-col-para">React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next. js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality. 
                </p>
                </Col>
            </Row>
            <Row>
                <Col lg={5}>
                <p class="first-col-para mt50">Work Timeline</p>
                </Col>
                <Col lg={7}>
                <table>
                    <tr style={{border:"2px solid white"}}>
                        <td>Example 1</td>
                        <td>Meta</td>
                        <td> 2023</td>
                    </tr>
                    <tr style={{border:"2px solid white"}}>
                        <td>Example 1</td>
                        <td>Google</td>
                        <td> 2021</td>
                    </tr>
                    <tr style={{border:"2px solid white"}}>
                        <td>Example 1</td>
                        <td>Microsoft</td>
                        <td> 2020</td>
                    </tr>
                    <tr></tr>
                </table>
                </Col>
            </Row>
            <Row>
                <Col lg={5}>
                <p class="first-col-para mt1001">skills</p>
                </Col>
                <Col lg={7}>
                <div style={{marginRight:"5px"}}>
    <div class="row">
        <div >
            <a class="btn btn-lg me-1" href="#">
                <span class="about-span">python</span>
            </a>
            <a class="btn btn-lg me-1" href="#">
                <span class="about-span">c</span>
            </a>
            <a class="btn btn-lg me-1" href="#">
                <span class="about-span">java</span>
            </a>
            <a class="btn btn-lg me-1" href="#">
                <span class="about-span">Bash</span>
            </a>
        </div>
    </div>
    <div class="row">
        <div >
            <a class="btn btn-lg mt-1 me-1" href="#">
                <span class="about-span">powershell</span>
            </a>
            <a class="btn btn-lg mt-1 me-1" href="#">
                <span class="about-span">reverse engineering</span>
            </a>
            <a class="btn btn-lg mt-1 me-1" href="#">
                <span class="about-span">web exploitaion</span>
            </a>
            <a class="btn btn-lg mt-1 me-1" href="#">
                <span class="about-span">network expliotation</span>
            </a>
        </div>
    </div>
</div>
                </Col>
               </Row>
            </Col>
        </Row>
        </Container>
        <Head/>
        </>
    )
}
export default About;