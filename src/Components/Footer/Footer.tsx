import React from 'react';
import { Col, Divider, Row, Image, Space, Typography } from 'antd';
const { Title } = Typography;


import src from "../../../public/logo-light.png"
import "./footer.css";
import Nav from '../Nav';
import ServicesList from './ServicesList';
import Industries from './Industries';


const FooterArea: React.FC = () => {
  return (
    <>
    <Row>
        <Col className='footer-text' xs={24} sm={24} md={24} lg={9} xl={9} xxl={12} >
            <Row>
                <Col>
                    <Image src={src} className='iconDesign' />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Space direction="vertical" size="middle" style={{ padding: "10px 0" }}>
                        <p><br/>
                            Creative-powered to fuel your growth goals. We build world-class digital products, software and branding. 
                        </p>
                        <p><br/>
                            Creative-powered to fuel your growth goals. We build world-class digital products, software and branding. Creative-powered to fuel your growth goals. We build world-class digital products, software and branding  
                        </p>
                    </Space>
                    <Divider />
                </Col>
            </Row>
        </Col>
        <Col className='footer-text' xs={24} sm={12} md={8}  lg={5} xl={5} xxl={4} >
            <Title  level={4} style={{ color: "#b3c5d9" }} >Our Services</Title>
            <ServicesList /> 
        </Col>
        <Col className='footer-text' xs={24} sm={0} md={8}  lg={5} xl={5} xxl={4} >
            <Title  level={4} style={{ color: "#b3c5d9" }} >Industries</Title>
            <Industries /> 
        </Col>
        <Col className='footer-text' xs={24} sm={12} md={8}  lg={5} xl={5} xxl={4} >
            <h2>Locations</h2>
            <Nav horizontal={false} style={{ backgroundColor : "#ffffff00", color: "#fff"  }} />
        </Col>
        <Divider />
        <Col className='copyright footer-text' span={24} >
            <div>&copy;{new Date().getFullYear()} PROGSITS Pakistan. All Rights Reserved</div>
            <div>Privacy Policy | Term of  Use</div>
        </Col>
    </Row>
    </>
  )
}

export default FooterArea