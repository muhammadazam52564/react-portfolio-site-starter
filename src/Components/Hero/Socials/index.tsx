import React from 'react';
import "./index.css";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin
} from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';

const Socials: React.FC = () => {
  return (
    <h2>
        <a className= "icon-design mail" href="mailto:contact@progsits.com" target="_blank" rel=""><HiOutlineMail /></a>
        <a className= "icon-design insta" href="https://www.instagram.com/progsits" target="_blank" rel=""><AiFillInstagram /></a>
        <a className= "icon-design fb" href="https://www.facebook.com/progsits" target="_blank" rel=""><AiFillFacebook /></a>
        <a className= "icon-design linkedin" href="https://www.linkedin.com/company/progsits" target="_blank" rel=""><AiFillLinkedin /></a>
    </h2>
  )
}

export default Socials