import React, {useContext, useEffect} from "react";
import {Container, Row, Col, Button} from 'react-bootstrap'
import iPhone11 from '../images/iphone11.png';
import iPhoneSE from '../images/iPhoneSE.png';
import './iPhone.css';
import ThemeContext from '../theme-context';

const IPhone = () => {
    const theme = useContext(ThemeContext);
    const useDocumentTitle = title => {
        useEffect(() => {
            document.title = `iPhone (${title})`;
        },
        [title]);
      };
    const title = theme.background
    useDocumentTitle(title);
    return (
        <section id="contentIphone" style={theme}>
            <Container>
            <Row>
                <Col xs="4">
                    <div className='iPhone11Panel'>
                        <Row style={{fontSize: '50px', fontWeight: '600'}}>
                            <label>iPhone 11</label>
                        </Row>
                        <Row style={{fontSize: '30px', fontWeight: '600', marginTop: '-15px'}}>
                            <label>W sam raz wszystkiego</label>
                        </Row>
                        <Row>
                            <Button className='buyButton'>
                                <a className='linkFromButton' href='https://www.apple.com/pl/shop/buy-iphone/iphone-11' target='_blank'>Kup</a>
                            </Button>                         
                        </Row>
                        <Row style={{marginTop: '10px'}}>
                            <a href='https://www.apple.com/pl/iphone-11/' target='_blank'>Dowiedz się więcej ></a>
                        </Row>
                    </div>
                </Col>
                <Col xs="8">
                    <img src={iPhone11} className="picIphones" alt="logo"/>
                </Col>
            </Row>

            <Row>
                <Col xs="8">
                    <img src={iPhoneSE} className="picIphones" alt="logo"/>
                </Col>
                <Col xs="4">
                    <div className='iPhoneSEPanel'>
                        <Row style={{fontSize: '50px', fontWeight: '600'}}>
                            <label>iPhone SE</label>
                        </Row>
                        <Row style={{fontSize: '30px', fontWeight: '600', marginTop: '-15px'}}>
                            <label>Tak dużo.</label>
                        </Row>
                        <Row style={{fontSize: '30px', fontWeight: '600', marginTop: '-15px'}}>
                            <label>Za nie tak dużo.</label>
                        </Row>
                        <Row>
                            <Button className='buyButton'>
                                <a className='linkFromButton' href='https://www.apple.com/pl/shop/buy-iphone/iphone-se' target='_blank'>Kup</a>
                            </Button>                         
                        </Row>
                        <Row style={{marginTop: '10px'}}>
                            <a href='https://www.apple.com/pl/iphone-se/' target='_blank'>Dowiedz się więcej ></a>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
        </section>  
    );
}
 
export default IPhone