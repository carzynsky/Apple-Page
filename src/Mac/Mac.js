import React, {useContext, useEffect} from "react";
import {Container, Row, Col, Button} from 'react-bootstrap'
import MacPro13 from '../images/macPro13.png';
import './Mac.css';
import ThemeContext from '../theme-context';

const Mac = () => {
    const theme = useContext(ThemeContext);
    const useDocumentTitle = title => {
        useEffect(() => {
            document.title = `Mac (${title})`;
        },
        [title]);
      };
    const title = theme.background
    useDocumentTitle(title);
    return (
        <section id="content" style={theme}>
            <Container>
            <Row>
                <Col xs="4">
                    <div className='macBookPanel1'>
                        <Row style={{fontSize: '20px', color: 'orange', fontWeight: '800'}}>
                            <label>Nowość</label>
                        </Row>
                        <Row style={{fontSize: '20px', fontWeight: '600'}}>
                            <label>13-calowy</label>
                        </Row>
                        <Row style={{fontSize: '50px', fontWeight: '600', marginTop: '-15px'}}>
                            <label>MacBook Pro</label>
                        </Row>
                        <Row style={{fontSize: '30px', fontWeight: '600', marginTop: '-15px'}}>
                            <label>Moc na wynos</label>
                        </Row>
                        <Row>
                                <Button className='buyButton'>
                                    <a className='linkFromButton' href='https://www.apple.com/pl/shop/buy-mac/macbook-pro/13-calowy' target='_blank'>Kup</a>
                                </Button>                         
                        </Row>
                        <Row style={{marginTop: '10px'}}>
                            <a href='https://www.apple.com/pl/macbook-pro-13/specs/' target='_blank'>Więcej ></a>
                        </Row>
                    </div>
                </Col>
                <Col xs="8">
                    <img src={MacPro13} className="picMac" alt="logo"/>
                </Col>
            </Row>
        </Container>
        </section>
    );
}
 
export default Mac