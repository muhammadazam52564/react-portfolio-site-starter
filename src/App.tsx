import { Col, Layout, Row, Image, Drawer } from 'antd';
import { Content, Header, Footer } from 'antd/es/layout/layout';
import image from "../public/logo.png";
import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import Nav from './Nav';
import Hero from './Hero';
import Socials from './Hero/Socials';
const App: React.FC = () => {
  /** States */  
  const [open, setOpen] = useState(false);


    /** Heandlers */  
  const openCloseHandler  = (state : boolean)=>{
    setOpen(state)
  }

  /** Styles */  
  const LogoStyle = {
    minWidth: "85px",
    maxWidth: "130px",
  }
  
  return (
    <Layout>
      <Hero/>
      <Header style={{ position: 'sticky',  top: 0 }} className='p-x-responsive c-bg-white' >
        <Row  align="middle">
            <Col span={4} >
              <Image src={image} preview={false} style={LogoStyle} />
            </Col>
            <Col span={20} >
              <div className='mobile'>
                <MenuOutlined 
                  onClick={() =>{ openCloseHandler(true)}} 
                  className='menuIcon' 
                  style={ { display: "flex", justifyContent: "end" }}  
                />
                <Drawer 
                  width={280}
                  open={open}
                  placement='left'
                  onClose={() =>{ openCloseHandler(false)}}
                >
                  <Nav horizontal={false} style={{}} />
                  <Socials />
                </Drawer>
              </div>
              <div className='desktop'>
                <Nav style={{ display: "flex", justifyContent: "end" }} horizontal={true}  />
              </div>
            </Col>
        </Row>
      </Header>
      <Content style={{ height: "220vh" }} ></Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default App