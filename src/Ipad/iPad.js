import React, {useContext, useEffect} from "react";
import {Container, Row, Col, Button} from 'react-bootstrap'
import Ipad from '../images/iPad.png';
import './iPad.css';
import ThemeContext from '../theme-context';

const IPad = () => {
    const theme = useContext(ThemeContext);
    const useDocumentTitle = title => {
        useEffect(() => {
            document.title = `iPad (${title})`;
        },
        [title]);
      };
    const title = theme.background
    useDocumentTitle(title);
    return (
        <section id="content" style={theme}>
            <Container>
                <Row>
                        <div className='iPadPanel1'>
                            <Row>
                                <Col style={{fontSize: '13px', color: 'orange', fontWeight: '800'}}>
                                    <label>Nowość</label>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{fontSize: '50px', fontWeight: '600', marginTop: '-5px'}}>
                                    <label>iPad Pro</label>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{fontSize: '20px', fontWeight: '600', marginTop: '-5px'}}>
                                    <label>Twój następny komputer nie musi być komputerem.</label>
                                </Col>                        
                            </Row>
                            <Row>
                                <Col style={{fontSize: '15px', fontWeight: '400'}}>
                                    <label>Już od 3999 zł</label>
                                </Col>                        
                            </Row>
                            <Row>
                                <Col>
                                    <Button className='buyButton'>
                                            <a className='linkFromButton' href='https://www.apple.com/pl/shop/buy-ipad/ipad-pro' target='_blank'>Kup</a>
                                    </Button>  
                                </Col>                                                      
                            </Row>
                            <Row>
                                <Col style={{marginTop: '20px'}}>
                                    <a href='https://www.apple.com/pl/ipad-pro/' target='_blank'>Dowiedz się więcej ></a>
                                </Col>
                            </Row>
                        </div>
                </Row>
                <Row>
                    <Col>
                        <img src={Ipad} className="picIPadPro" alt="logo"/>
                    </Col>           
                </Row>
            </Container>
        </section>
    );
}
 
export default IPad