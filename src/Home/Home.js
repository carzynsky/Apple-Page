import React, { useContext, useEffect, Component } from "react";
import {Row, Col} from 'react-bootstrap'
import './Home.css';
import iPhones from '../images/iphone11.png';
import ThemeContext from "../theme-context";

const Home = () => {
    const theme = useContext(ThemeContext);
    const useDocumentTitle = title => {
        useEffect(() => {
            document.title = `Home (${title})`;
        },
        [title]);
      };
    const title = theme.background
    useDocumentTitle(title);
    return (
        <div style={theme}>
            <div className="firstBox">
                <Row>
                    <Col>
                        <label>Hello, I'm Apple.</label>
                    </Col>
                </Row>
            </div>
            <div className="secondBox">
                <div className="secondBoxPanel">
                    <Row>
                        <Col style={{fontSize: '50px', fontWeight: '700'}}>
                            <label>iPhone 11</label>
                        </Col>                      
                    </Row>
                    <Row>
                        <Col style={{fontSize: '30px'}}>
                            <label>W sam raz wszystkiego.</label>
                        </Col>                       
                    </Row>
                    <Row>
                        <div className='iphonesMoreInfo'>
                            <Row>
                                <Col>
                                    <a style={theme} href='https://www.apple.com/pl/iphone-11/' target='_blank'>Więcej ></a>
                                </Col>
                                <Col>
                                    <a style={theme}href='https://www.apple.com/pl/shop/buy-iphone/iphone-11' target='_blank'>Kup ></a>
                                </Col>
                            </Row>                         
                        </div>
                    </Row> 
                    <Row style={{paddingTop: '20px'}}>
                        <Col>
                            <img src={iPhones} className="picPhones" alt="logo"/>
                        </Col>
                    </Row>     
                </div>         
            </div>
        </div>
    );
}

 
export default Home