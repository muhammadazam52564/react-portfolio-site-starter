import React from 'react';
import { Col, FloatButton, Row } from 'antd';
import "./index.css";
import { AiFillPhone } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';

import Socials from './Socials';

const Hero: React.FC = () => {
  return (
    <>
        <Row className='hero-top' align={"middle"}>
            <Col span={20} offset={2} className='hero-col'>
              <div className='phone-email'>
                <AiFillPhone /><h4>+92 300 400 1283</h4>
              </div>
              <div className='social-icons'>
                <Socials />
              </div>
            </Col>
        </Row>
        <FloatButton href="https://wa.me/+923004001283" target="_blank" shape="circle" type="default" icon={<IoLogoWhatsapp style={{ color: "#25d366" }} />} ></FloatButton>
    </>
  )
}

export default Hero