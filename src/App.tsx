import { Col, Layout, Row, Image, Drawer } from 'antd';
import { Content, Header, Footer } from 'antd/es/layout/layout';
import image from "../public/logo.png";
import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import {
  BrowserRouter as Router, 
  Routes,
  Route,
} from "react-router-dom";
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Socials from './Components/Hero/Socials';
import Home from './Pages/Home/Home';
import Company from './Pages/Company/Company';
import Services from './Pages/Services/Services';
import Products from './Pages/Products/Products';
import Contact from './Pages/Contact/Contact';
import FooterArea from './Components/Footer/Footer';

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
      <Router>
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
      <Content style={{
        height: "85vh"
      }}>
        <Routes>
          <Route element={<Home />} path={"/"} />
          <Route element={<Company />} path={"/company"} />
          <Route element={<Services />} path={"/services"} />
          <Route element={<Products />} path={"/products"} />
          <Route element={<Contact />} path={"/contact"} />
        </Routes>
      </Content>
      <Footer className='footerStyle'>
        <FooterArea />
      </Footer>
      </Router>
    </Layout>
  )
}

export default App